import styles from "./bookGallery.scss";
import { IBook } from "../../shared/interfaces";
import { BookCard } from "../bookCard/bookCard";
import { Button } from "../../shared/ui/button/button";
import { mediator } from "../../shared/mediator";
import { BrowseCategories } from "../../features/browseCategories/browseCategories";
import { cart } from "../../entities/cart/cart";
import { Loader } from "../../shared/ui/loader/loader";

const bookCategory: string[] = [
  "Architecture",
  "Art & Fashion",
  "Biography",
  "Business",
  "Crafts & Hobbies",
  "Drama",
  "Fiction",
  "Food & Drink",
  "Health & Wellbeing",
  "History & Politics",
  "Humor",
  "Poetry",
  "Psychology",
  "Science",
  "Technology",
  "Travel & Maps",
];

const loadMoreBtn = Button("load more", "btn-load-more", styles.loadMoreBtn);

const sideNav = new BrowseCategories(
  bookCategory,
  "book-gallery-side-nav-container"
);

// The BrowseBooks class is responsible for displaying books to users, which is the purpose of the app,
// and therefore it handles the majority of the page's functionality

export class BookGallery {
  private mediator = mediator;
  private cart = cart;
  private booksFromCart: IBook[] = [];
  private currentCategory: string = "Architecture";
  private printType: string = "books";
  private startIndex: number = 0;
  private maxResults: number = 6;
  private langRestrict: string = "en";
  private apiUrl: string = "https://www.googleapis.com/books/v1/volumes";
  private apiKey: string = `AIzaSyAV1Pfj6dTytZrCYtRXnjOIgt0YuFbWMLA`;
  private defaultParams: URLSearchParams = new URLSearchParams({
    printType: this.printType,
    startIndex: this.startIndex.toString(),
    maxResults: this.maxResults.toString(),
    langRestrict: this.langRestrict,
  });

  constructor() {
    this.mediator.subscribe("categorySelected", (category: string) => {
      this.currentCategory = category;
      this.resetAndLoadBooks();
    });
    this.mediator.subscribe("addToCart", (book: IBook) => {
      this.cart.add(book);
    });
    this.mediator.subscribe("removeFromCart", (book: IBook) => {
      this.cart.remove(book);
    });
    this.mediator.subscribe("cartUpdated", (books: IBook[]) => {
      this.booksFromCart = books;
    });
  }

  create() {
    return `
        <section class="${styles.contentContainer}">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="${styles.sidebarIconToggle}">
          <div class="${styles.spinner} ${styles.diagonal} ${
      styles.part1
    }"></div>
          <div class="${styles.spinner} ${styles.horizontal}"></div>
          <div class="${styles.spinner} ${styles.diagonal} ${
      styles.part2
    }"></div>
        </label>
          <aside class="${
            styles.sideNavContainer
          }" id="book-gallery-side-nav-container" tabindex="-1">
          ${sideNav.createMenu()}
          </aside>
          <div class="${styles.bookGallery}" id="book-gallery">
          </div>
          <div class="${styles.loaderContainer}" id="gallery-loader-container">
          </div>
          <div class="${styles.loadBtnContainer}">
          ${loadMoreBtn}
          </div>
        </section>
    `;
  }

  async fetchBooks(): Promise<IBook[]> {
    const params = new URLSearchParams(this.defaultParams);
    params.set("q", `subject:${this.currentCategory}`);
    params.set("key", this.apiKey);
    params.set("startIndex", this.startIndex.toString());

    const url = `${this.apiUrl}?${params.toString()}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.items.map((item: any) => ({
      id: item.id,
      authors: item.volumeInfo.authors,
      title: item.volumeInfo.title,
      averageRating: item.volumeInfo.averageRating,
      ratingsCount: item.volumeInfo.ratingsCount,
      description: item.volumeInfo.description,
      amount: item.volumeInfo.amount,
      currencyCode: item.volumeInfo.currencyCode,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
    }));
  }

  private toggleLoader(visibility: "show" | "hide"){
    const loaderContainer = document.getElementById("gallery-loader-container") as HTMLDivElement;
    if(loaderContainer){
      if(visibility === "show") {
        loaderContainer.innerHTML = Loader();
      }
      else {
        loaderContainer.innerHTML = ""
      }
    } else throw new Error("loader container not found")
  }

  async loadBooks() {
    try {
      const bookGalleryNode = document.getElementById(
        "book-gallery"
      ) as HTMLDivElement;
      const loadMoreBtn = document.getElementById("btn-load-more") as HTMLButtonElement;

        this.toggleLoader("show");
        loadMoreBtn.disabled = true;

      const books = await this.fetchBooks();
      let isBookInCart = false;
      if (bookGalleryNode) {
        books.forEach((book) => {
          const cardElement = document.createElement("div");
          cardElement.classList.add(`${styles.bookCard}`);
          const bookCard = new BookCard(book);
          cardElement.innerHTML = `${bookCard.create()}`;
          bookGalleryNode.appendChild(cardElement);
          isBookInCart = this.booksFromCart.some((el) => el.id === book.id);
          bookCard.update(isBookInCart);
        });
        this.startIndex += this.maxResults;
      }

      this.toggleLoader("hide");
      loadMoreBtn.disabled = false;
    } catch (error) {
      console.error("Error fetching books", error);
    }
  }

  async resetAndLoadBooks() {
    this.startIndex = 0;
    const bookGalleryNode = document.getElementById(
      "book-gallery"
    ) as HTMLDivElement;
    bookGalleryNode.innerHTML = "";
    await this.loadBooks();
  }

  update() {
    sideNav.update();
    const loadMoreBtn = document.getElementById("btn-load-more");
    this.resetAndLoadBooks();
    loadMoreBtn?.addEventListener("click", this.loadBooks.bind(this));
  }
}
