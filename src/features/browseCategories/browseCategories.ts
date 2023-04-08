import { SideNav } from "../../shared/ui/sideNav/sideNav";
import styles from "../../shared/ui/sideNav/sideNav.scss";
import { mediator } from "../../shared/mediator"

export class BrowseCategories {
  private mediator = mediator;
  private categories: string[];
  private defaultCategory: string = "";
  private parentContainerId: string;
  private parentContainer: HTMLElement | null = null;

  constructor(
    categories: string[],
    parentContainerId: string
  ) {
    this.categories = categories;
    this.parentContainerId = parentContainerId;
  }

  public createMenu(categories: string[] = this.categories) {
    return SideNav(categories);
  }

  public update() {
    this.parentContainer = document.getElementById(this.parentContainerId);
    this.parentContainer?.addEventListener(
      "click",
      this.handleContainerClick.bind(this)
    );
    const defaultCategoryEl = this.parentContainer?.querySelector(
      ".sideNavBookCategory"
    ) as HTMLElement;
    if(defaultCategoryEl) {
      defaultCategoryEl.classList.add(`${styles.active}`);
      const defaultActiveButton = defaultCategoryEl.closest("button");
      if(defaultActiveButton) {
        this.defaultCategory = defaultCategoryEl.closest("button")?.dataset.category as string;
          this.mediator.emit("categorySelected", this.defaultCategory);
      }
    }
  }

  private highlightItem(target: HTMLElement) {
    const listItem = target.closest("li");
    if (listItem) {
      const activeItem = listItem.parentElement?.querySelector(
        `.${styles.active}`
      );
      if (activeItem) {
        activeItem.classList.remove(`${styles.active}`);
      }
      listItem.classList.add(`${styles.active}`);
    }
  }

  private handleContainerClick(event: Event) {
    const target = event.target as HTMLElement;
    this.highlightItem(target);
    if (target.tagName === "BUTTON") {
      const category = target.dataset.category;
      if (category) {
        this.mediator.emit("categorySelected", category);
      }
    }
  }
}
