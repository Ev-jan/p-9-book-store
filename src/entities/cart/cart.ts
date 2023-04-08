import { IBook } from "../../shared/interfaces";
import { mediator } from "../../shared/mediator";

export class Cart {
  private mediator = mediator;
  private items: IBook[] = [];
  constructor() {
    window.addEventListener("load", this.showItemCount);
  }

  public add(item: IBook) {
    this.items.push(item);
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.showItemCount();
  }

  public remove(item: IBook) {
    const isItemFound = this.items.some((el) => el.id === item.id);
    if (isItemFound) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.items));
    }
    this.showItemCount();
  }

  public update() {
    this.getBooks()
    this.mediator.emit("cartUpdated", this.items);
    this.showItemCount();
  }

  private showItemCount() {
    const headerCartCountEl = document.getElementById("headerCartCount");
    const cartJson = localStorage.getItem("cart");
    const retrievedItems = cartJson ? JSON.parse(cartJson) as IBook[] : this.items;
    if (headerCartCountEl && retrievedItems.length > 0) {
      headerCartCountEl.style.display = "block";
      headerCartCountEl.textContent = `${retrievedItems.length}`;
    } else if (headerCartCountEl && retrievedItems.length === 0) {
      headerCartCountEl.style.display = "none";
    }
  }

  public getBooks() {
    const cartJson = localStorage.getItem("cart");
    if (cartJson) {
      this.items = JSON.parse(cartJson) as IBook[];
    }
    return this.items
  }
}

export const cart: Cart = new Cart();
