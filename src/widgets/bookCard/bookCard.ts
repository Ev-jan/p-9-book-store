import styles from "./bookCard.scss";
import { Button } from "../../shared/ui/button/button";
import { RatingStars } from "../../shared/ui/ratingStars/ratingStars";
import { IBook } from "../../shared/interfaces";
import { GenerateId } from "../../shared/helpers";
import { Mediator } from "../bookGallery/mediator";

export class BookCard {
  private mediator: Mediator;
  private book: IBook;
  private authors: string = "Author unknown";
  private title: string = "No title";
  private averageRating: number;
  private ratingsCount: number;
  private description: string = "No Description";
  private amount: number;
  private currencyCode: string;
  private thumbnail: string = "../../shared/assets/book-cover-placeholder.png";
  private id: string = GenerateId();

  constructor(books: IBook, mediator: Mediator) {
    this.id = books.id ? books.id : this.id;
    this.authors = books.authors ? books.authors : this.authors;
    this.title = books.title ? books.title : this.title;
    this.averageRating = books.averageRating;
    this.ratingsCount = books.ratingsCount;
    this.description = books.description ? books.description : this.description;
    this.amount = books.amount;
    this.currencyCode = books.currencyCode;
    this.thumbnail = books.thumbnail ? books.thumbnail : this.thumbnail;
    this.book = books;
    this.mediator = mediator;
  }

  public create() {
    return `
    <section class="${styles.bookCard}">
    <div class="${styles.coverContainer}">
      <img class="${styles.cover}" src="${this.thumbnail}" alt="front cover" />
    </div>
    <div class="${styles.bookData}">
      <p class="${styles.author}">${this.formatAuthorsNames(this.authors)}</p>
      <h2 class="${styles.title}">${this.title}</h2>
      ${
        this.averageRating && this.ratingsCount
          ? `<div class="${styles.ratingBar}">
            ${RatingStars(this.averageRating)}
            <span class="${styles.reviewCount}">${this.formatRatingsCount(
              this.ratingsCount
            )}</span>
          </div>`
          : ""
      }
      <p class="${styles.description}">${this.description}</p>
      ${
        this.amount && this.currencyCode
          ? `<p class="${styles.price}">${this.currencyCode} ${this.amount}</p>`
          : ""
      }
      
      <div class="${styles.buttonContainer}">${Button(
      "buy now",
      `buyNowBtn-${this.id}`
    )}</div>
    </div>
  </section>
    `;
  }

  private formatRatingsCount = (count: number): string => {
    if (count === 1) {
      return count.toString() + " review";
    }
    if (count > 1) {
      return count.toString() + " reviews";
    }
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return Math.round(count / 1000).toString() + "K" + " reviews";
    } else {
      return Math.round(count / 1000000).toString() + "M" + " reviews";
    }
  };

  private formatAuthorsNames = (names: string | string[]) => {
    if (typeof names === "string") {
      if (names.includes(",")) {
        return names.split(",").join(", ");
      }
      return names;
    } else if (Array.isArray(names)) {
      return names.join(", ");
    } else {
      return "Author unknown";
    }
  }

  public update() {
    const buyNowBtn = document.getElementById(`buyNowBtn-${this.id}`);
    buyNowBtn?.addEventListener("click", () => {
      if (buyNowBtn.innerText === "BUY NOW") {
        buyNowBtn.innerText = "IN CART";
        buyNowBtn.style.border = "1px solid #EEEDF5";
        buyNowBtn.style.color = "#5C6A79";
        this.mediator.emit("addToCart", this.book);
      } else if (buyNowBtn.innerText === "IN CART") {
        buyNowBtn.innerText = "BUY NOW";
        buyNowBtn.style.border = "1px solid #4C3DB2";
        buyNowBtn.style.color = "#4C3DB2";
        this.mediator.emit("removeFromCart", this.book);
      }
    });
  }
}
