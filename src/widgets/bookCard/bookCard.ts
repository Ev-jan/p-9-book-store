import styles from "./bookCard.scss";
import { Button } from "../../shared/ui/button/button";
import { RatingStars } from "../../shared/ui/ratingStars/ratingStars";

const buyNowBtn = Button("buy now");


export interface IBook {
  author: string;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  price: string;
  cover: string;
}

export const mockBook: IBook = {
  author: "Kevin Kwan",
  title: "Crazy rich asians",
  rating: 4.4,
  reviews: 275000,
  description:
    "the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip ese families and the gossip...",
  price: "$4.99",
  cover: "../../shared/assets/book-cover-placeholder.png",
};

export class BookCard {
  private author: string;
  private title: string;
  private rating: number;
  private reviews: number;
  private description: string;
  private price: string;
  private cover: string;

  constructor(books: IBook) {
    this.author = books.author;
    this.title = books.title;
    this.rating = books.rating;
    this.reviews = books.reviews;
    this.description = books.description;
    this.price = books.price;
    this.cover = books.cover;
  }

  public create() {
    return `
    <section class="${styles.bookCard}">
    <div class="${styles.coverContainer}">
      <img class="${styles.cover}" src="${this.cover}" alt="book cover" />
    </div>
    <div class="${styles.bookData}">
      <p class="${styles.author}">${this.author}</p>
      <h2 class="${styles.title}">${this.title}</h2>
        <div class="${styles.ratingBar}">
            ${RatingStars(this.rating)}
            <span class="${styles.reviewCount}">${this.reviews} review</span>
        </div>
      <p class="${styles.description}">${this.description}</p>
      <p class="${styles.price}">${this.price}</p>
      <div class="${styles.buttonContainer}">${buyNowBtn}</div>
    </div>
  </section>
    `;
  }
}
