import styles from "./audioBooksPage.scss";
import { booksShopHeader } from "../../widgets/header/header";

export class AudioBooksPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksShopHeader.create()}
  </div>
  <main class="${styles.restrainingContainer}">
      <section class="${styles.heroContainer}">
      <img src="https://www.kindpng.com/picc/m/174-1745527_page-under-construction-sign-in-red-hd-png.png" loading="lazy" alt="Page Under Construction Sign In Red, HD Png Download@kindpng.com">
      </section>
  </main>
  </body>
  `;
  }

  public update() {
    booksShopHeader.update()
  }
}
