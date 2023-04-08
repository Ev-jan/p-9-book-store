import styles from "./giftsPage.scss";
import { booksShopHeader } from "../../widgets/header/header";

export class GiftsPage {
  constructor() {}
  public create() {
    return `
  <body>
  <div class="${styles.headerContainer}">
  ${booksShopHeader.create()}
  </div>
  <main class="${styles.restrainingContainer}">
      <section class="${styles.heroContainer}">
      <img src="https://media.istockphoto.com/id/1190489967/photo/cat-notebook-computer.jpg?b=1&s=170667a&w=0&k=20&c=rdVc5xjG6m8aA7PJEh0_albQ9Ddj9VtCTIbuNN75lA8=" alt="cat designing web page">
      </section>
  </main>
  </body>
  `;
  }

  public update() {
    booksShopHeader.update()
  }
}
