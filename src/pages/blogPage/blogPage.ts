import styles from "./blogPage.scss";
import { booksShopHeader } from "../../widgets/header/header";

export class BlogBooksPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksShopHeader.create()}
  </div>
  <main class="${styles.restrainingContainer}">
      <section class="${styles.heroContainer}">
      <img src="../../shared/assets/chat_blogging.jpg" alt="cat-blogger gazing at the laptop screen, page is under construction">
      </section>
  </main>
  </body>
  `;
  }

  public update() {
    booksShopHeader.update()
  }
}
