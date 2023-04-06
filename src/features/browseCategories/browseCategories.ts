import { SideNav } from "../../shared/ui/sideNav/sideNav";
import styles from "../../shared/ui/sideNav/sideNav.scss";
import { Mediator } from "../../widgets/bookGallery/mediator";

export class BrowseCategories {
  mediator: Mediator;
  categories: string[];
  defaultCategory: string = "";
  parentContainerId: string;
  parentContainer: HTMLElement | null = null;

  constructor(
    mediator: Mediator,
    categories: string[],
    parentContainerId: string
  ) {
    this.mediator = mediator;
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
    defaultCategoryEl.classList.add(`${styles.active}`);
    if(defaultCategoryEl) {
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
