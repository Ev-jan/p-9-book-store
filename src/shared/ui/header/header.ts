
import styles from "./header.scss"
export const Header = (logo:string, navbar:string, iconBar:string) => {
  return (`
    <header class=${styles.header}>
      <div class="logo">${logo}</div>
      <nav class="navbar">${navbar}</nav>
      <div class="icon-bar">${iconBar}</div>
    </header>
  `);
};