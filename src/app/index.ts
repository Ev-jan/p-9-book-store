import "./index.scss";
import { BooksPage } from "../pages/booksPage/booksPage";
import { GiftsPage } from "../pages/giftsPage/giftsPage";
import { AudioBooksPage } from "../pages/audioBooksPage/audioBooksPage";
import { BlogBooksPage } from "../pages/blogPage/blogPage";
import { InavEvent } from "../shared/interfaces";
import { cart } from "../entities/cart/cart";
const booksPage = new BooksPage();
const audioBooksPage = new AudioBooksPage();
const giftsPage = new GiftsPage();
const blogPage = new BlogBooksPage();

const handleRoute = (path: string) => {
  switch (path) {
    case "/":
      document.getElementById("root")!.innerHTML = booksPage.create();
      booksPage.update();
      cart.update();
      break;
    case "/audiobooks":
      document.getElementById("root")!.innerHTML = audioBooksPage.create();
      audioBooksPage.update();
      cart.update();
      break;
    case "/gifts":
      document.getElementById("root")!.innerHTML = giftsPage.create();
      giftsPage.update();
      cart.update();
      break;
    case "/blog":
      document.getElementById("root")!.innerHTML = blogPage.create();
      blogPage.update();
      break;
  }
};

export const App = () => {
  const root = document.getElementById("root");
  if (root) {
    handleRoute(window.location.pathname);
    document.addEventListener("navigate", (event: Event) => {
      const navEvent = event as InavEvent;
      const { path } = navEvent.detail;
      handleRoute(path);
    });

    window.addEventListener("popstate", () => {
      handleRoute(window.location.pathname);
    });
    window.addEventListener("load", () => {
      handleRoute(window.location.pathname);
    });
  }
};
