import styles from "./booksPage.scss";
import { ISlideImage } from "../../shared/interfaces";
import { Slider } from "../../widgets/slider/slider";
import { BookGallery } from "../../widgets/bookGallery/bookGallery";
import { booksShopHeader } from "../../widgets/header/header";

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
const bookGallery = new BookGallery();

export class BooksPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksShopHeader.create()}
  </div>
  <div class="${styles.adSquareContainer}">
  <a class="${styles.adSquare}" href="">Change old book to new <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
  <a class="${styles.adSquare}" href="">top 100 books 2022 <img src="../../shared/assets/arrow-right.svg" alt="click here"></a>
</div>
  <main class="${styles.restrainingContainer}">
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
    booksShopHeader.update();
  }
}
