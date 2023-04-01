import styles from "./index.scss";
import { Button } from "../../shared/ui/button/button";
import { NavigationItem } from "../../shared/interfaces";
import { SlideImage } from "../../shared/interfaces";
import { Slider } from "../../widgets/slider/slider";
import { Header } from "../../shared/ui/header/header";
import { BookCard } from "../../widgets/bookCard/bookCard";
import { mockBook } from "../../widgets/bookCard/bookCard";
import { IBook } from "../../widgets/bookCard/bookCard";

const loadMoreBtn = Button("load more");
const navigationItems: NavigationItem[] = [
  { label: "BOOKS", url: "/" },
  { label: "AUDIOBOOKS", url: "/audiobooks" },
  { label: "STATIONARY & GIFTS", url: "/gifts" },
  { label: "BLOG", url: "/blog" },
];

const slides: SlideImage[] = [
  { url: "../../../shared/assets/banner-1.png", alt: "black friday sale" },
  { url: "../../../shared/assets/banner-2.png", alt: "ten top books for entrepreneures"},
  { url: "../../../shared/assets/banner-3.png", alt: "check our cozy books selection"},
];
const bookPageSlider = new Slider(slides);
const booksPageHeader = Header("Bookshop", navigationItems);
const bookCard = new BookCard(mockBook);
const sideNav = "here goes sideNav";

export class BooksPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksPageHeader}
  </div>

  <main class="${styles.restrainingContainer}">
  <a href="">Change old book to new <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
  <a href="">top 100 books 2022 <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
      <section class="${styles.heroContainer}">
      ${bookPageSlider.create(slides)}
      </section>
      <section class="${styles.contentContainer}">
          <aside class="${styles.sideNavContainer}">
          ${sideNav}
          </aside>
          <div class="${styles.bookGallery}">
          <div class="${styles.bookCard}">${bookCard.create()}</div>
          <div class="${styles.bookCard}"></div>
          <div class="${styles.bookCard}"></div>
          <div class="${styles.bookCard}"></div>
          <div class="${styles.bookCard}"></div>
          <div class="${styles.bookCard}"></div>
          <div class="${styles.loadBtnContainer}">
          ${loadMoreBtn}
          </div>
          </div>
      </section>
  </main>

  </body>
  `;
  }

  public update() {
    bookPageSlider.update();
  }
}


// <div class="${styles.restrainingContainer}">
//   </div>