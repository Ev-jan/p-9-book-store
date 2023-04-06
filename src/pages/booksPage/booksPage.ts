import styles from "./booksPage.scss";
import { INavigationItem } from "../../shared/interfaces";
import { ISlideImage } from "../../shared/interfaces";
import { Slider } from "../../widgets/slider/slider";
import { Header } from "../../shared/ui/header/header";
import { BookGallery } from "../../widgets/bookGallery/bookGallery";

const navigationItems: INavigationItem[] = [
  { label: "BOOKS", url: "/" },
  { label: "AUDIOBOOKS", url: "/audiobooks" },
  { label: "STATIONARY & GIFTS", url: "/gifts" },
  { label: "BLOG", url: "/blog" },
];

const slides: ISlideImage[] = [
  { url: "../../../shared/assets/banner-1.png", alt: "black friday sale" },
  {
    url: "../../../shared/assets/banner-2.png",
    alt: "ten top books for entrepreneures",
  },
  {
    url: "../../../shared/assets/banner-3.png",
    alt: "check our cozy books selection",
  },
];

const bookPageSlider = new Slider(slides);
const booksPageHeader = Header("Bookshop", navigationItems);
const bookGallery = new BookGallery();

export class BooksPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksPageHeader}
  </div>
  <main class="${styles.restrainingContainer}">
  <a class="${styles.adSquare}" href="">Change old book to new <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
  <a class="${styles.adSquare}" href="">top 100 books 2022 <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
      <section class="${styles.heroContainer}">
      ${bookPageSlider.create(slides)}
      </section>
      ${bookGallery.create()}
  </main>
  </body>
  `;
  }

  public update() {
    bookPageSlider.update();
    bookGallery.update();
  }
}
