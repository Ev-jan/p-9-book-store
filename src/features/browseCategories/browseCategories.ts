import { SideNav } from "../../shared/ui/sideNav/sideNav";
import { Mediator } from "../../widgets/bookGallery/mediator";

export class BrowseCategories {

  mediator: Mediator;
  categories: string[];
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

  public update(){
    this.parentContainer = document.getElementById(
        this.parentContainerId
      );
      this.parentContainer?.addEventListener(
        "click",
        this.handleContainerClick.bind(this)
      );
  }

  private handleContainerClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON") {
      const category = target.dataset.category;
      if (category) {
        this.mediator.emit("categorySelected", category);
      }
    }
  }
}
