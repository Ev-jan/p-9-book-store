import { Header } from "../../shared/ui/header/header";
import { INavigationItem } from "../../shared/interfaces";
const navigationItems: INavigationItem[] = [
  { label: "BOOKS", url: "/" },
  { label: "AUDIOBOOKS", url: "/audiobooks" },
  { label: "STATIONARY & GIFTS", url: "/gifts" },
  { label: "BLOG", url: "/blog" },
];

class BookShopHeader {
  constructor() {}

  public create() {
    return Header("Bookshop", navigationItems);
  }

  public update() {
    const booksPageLink = document.querySelector('a[href="/"]');
    booksPageLink?.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState(null, "", "/");
      const navEvent = new CustomEvent("navigate", { detail: { path: "/" } });
      document.dispatchEvent(navEvent);
    });

    const audioPageLink = document.querySelector('a[href="/audiobooks"]');
    audioPageLink?.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState(null, "", "/audiobooks");
      const navEvent = new CustomEvent("navigate", {
        detail: { path: "/audiobooks" },
      });
      document.dispatchEvent(navEvent);
    });

    const giftsPageLink = document.querySelector('a[href="/gifts"]');
    giftsPageLink?.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState(null, "", "/gifts");
      const navEvent = new CustomEvent("navigate", {
        detail: { path: "/gifts" },
      });
      document.dispatchEvent(navEvent);
    });

    const blogPageLink = document.querySelector('a[href="/blog"]');
    blogPageLink?.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState(null, "", "/blog");
      const navEvent = new CustomEvent("navigate", {
        detail: { path: "/blog" },
      });
      document.dispatchEvent(navEvent);
    });
  }
}

export const booksShopHeader = new BookShopHeader();
