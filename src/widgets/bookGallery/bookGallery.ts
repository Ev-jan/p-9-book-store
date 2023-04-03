import styles from "./bookGallery.scss";
import { IBook } from "../../shared/interfaces";
import { BookCard } from "../bookCard/bookCard";
import { Button } from "../../shared/ui/button/button";
import { Mediator } from "./mediator";
import { BrowseCategories } from "../../features/browseCategories/browseCategories";
import { Cart } from "../../entities/cart/cart";

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

const loadMoreBtn = Button("load more", "btn-load-more");
const mediator = new Mediator();
const sideNav = new BrowseCategories(
  mediator,
  bookCategory,
  "book-gallery-side-nav-container"
);

// The BrowseBooks class is responsible for displaying books to users, which is the purpose of the app,
// and therefor it handles the majority of the page"s functionality.

export class BookGallery {
  private mediator: Mediator  = mediator;
  private cart: Cart = new Cart();
  private currentCategory: string = "Architecture";
  private printType: string = "books";
  private startIndex: number = 0;
  private maxResults: number = 6;
  private langRestrict: string = "en";
  private apiUrl: string = "https://www.googleapis.com/books/v1/volumes";
  private apiKey: string = "AIzaSyAV1Pfj6dTytZrCYtRXnjOIgt0YuFbWMLA";
  private defaultParams: URLSearchParams = new URLSearchParams({
    printType: this.printType,
    startIndex: this.startIndex.toString(),
    maxResults: this.maxResults.toString(),
    langRestrict: this.langRestrict,
  });

  constructor() {
    this.mediator.subscribe("categorySelected", (category: string) => {
      this.currentCategory = category;
    });
    this.mediator.subscribe("addToCart", (book: IBook) => {
      this.cart.add(book)
    });
    this.mediator.subscribe("removeFromCart", (book: IBook) => {
      this.cart.remove(book);
    });
  }

  create() {
    return `
        <section class="${styles.contentContainer}">
        <aside class="${
          styles.sideNavContainer
        }" id="book-gallery-side-nav-container">
        ${sideNav.createMenu()}
        </aside>
        <div class="${styles.bookGallery}" id="book-gallery">

        </div>
        <div class="${styles.loadBtnContainer}">
        ${loadMoreBtn}
        </div>
    </section>
    `;
  }

  // <div class="${styles.bookCard}">${bookCard.create()}</div>
  // <div class="${styles.bookCard}">${bookCard.create()}</div>

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
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
    }));
  }

  async loadBooks() {
    try {
      const bookGalleryNode = document.getElementById(
        "book-gallery"
      ) as HTMLDivElement;
      const books = await this.fetchBooks();
        if(bookGalleryNode){
            books.forEach((book)=>{
                const cardElement = document.createElement("div");
                cardElement.classList.add(`${styles.bookCard}`);
                const bookCard = new BookCard(book, this.mediator);
                cardElement.innerHTML = `${bookCard.create()}`;
                bookGalleryNode.appendChild(cardElement);
                bookCard.update();
            });
            this.startIndex += this.maxResults; // increment the start index to get next six items
        }
    } catch (error) {
      console.error("Error fetching books", error);
    }
  }

  update() {
    sideNav.update();

    const loadMoreBtn = document.getElementById("btn-load-more");
    loadMoreBtn?.addEventListener("click", this.loadBooks.bind(this));
  }
}
