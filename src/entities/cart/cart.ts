import { IBook } from "../../shared/interfaces";

export class Cart {
    private items: IBook[] = [];
    constructor(){}

    public add(item: IBook) {
        this.items.push(item);
        localStorage.setItem("cart", JSON.stringify(this.items));
      }

      public remove(item: IBook) {
        const isItemFound = this.items.some((el) => el.id === item.id);
        if (isItemFound) {
          const index = this.items.indexOf(item);
          this.items.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(this.items));
        }
      }

    private getTotal(){

    }

}