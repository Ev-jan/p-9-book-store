import styles from "./navigation.scss";
import { NavigationItem } from "../../interfaces";

export const Navigation = (items: NavigationItem[]) => {
  const navigationItems = items
    .map((item) => `<li><a href="${item.url}">${item.label}</a></li>`)
    .join("");
  return `
  <nav class="${styles.navigation}">
  <ul>
  ${navigationItems}
</ul>
</nav>
  `;
};
