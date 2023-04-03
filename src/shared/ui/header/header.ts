import { INavigationItem } from "../../interfaces";
import styles from "./header.scss";

export const Header = (
  logo: string,
  items: INavigationItem[],
  styleModifierClass?: string
) => {
  const navigationItems = items
    .map(
      (item) =>
        `<li class=${styleModifierClass}><a href="${item.url}">${item.label}</a></li>`
    )
    .join("");
    
  return `
    <header class=${styles.header}>
      <div class="${styles.logo}">${logo}</div>
      <nav>
        <ul>
          ${navigationItems}
        </ul>
      </nav>
      <div class="${styles.iconBar}">
      <a id="headerUserLog" href=""><img src="./shared/assets/ic-user.svg" alt="sign in"></a>
      <button id="headerSearchBtn" type="submit" aria-label="Search" aria-expanded="true"><img src="./shared/assets/ic-search.svg" alt="search"></button>
      <a id="headerCart" href=""><img src="./shared/assets/ic-cart-empty.svg" alt="cart"></a>
      </div>
    </header>
  `;
};
