import styles from "./sideNav.scss";

export const SideNav = (categories: string[]) => {
    const categoryItems = categories.map((category) => `<li><button data-category="${category}">${category}</button></li>`);
    const categoryList = `<ul class="${styles.categories}">${categoryItems.join('')}</ul>`;
  return `
<div class="${styles.sideNav}">
${categoryList}
</div>
    `;
};
