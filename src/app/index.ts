import "./index.scss";
import { BooksPage } from "../pages/booksPage";
const booksPage = new BooksPage();

export const App = () => {
    document.write(booksPage.create());
    booksPage.update();
}