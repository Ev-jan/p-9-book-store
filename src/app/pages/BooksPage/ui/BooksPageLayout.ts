import styles from "./BooksPageLayout.scss";
import { Button } from "../../../../shared/ui/button/button";
import { NavigationItem } from "../../../../shared/interfaces";
import { HeaderNavBar } from "../../../../features/headerNnavbar/components/headerNavBar";
import { Header } from "../../../../shared/ui/header/header";
const header = Header("Bookshop", HeaderNavBar, "Icons");
const loadMoreBtn = Button("load more");

const navigationItems: NavigationItem[] = [
  { label: "BOOKS", url: "/" },
  { label: "AUDIOBOOKS", url: "/audiobooks" },
  { label: "STATIONARY & GIFTS", url: "/gifts" },
  { label: "BLOG", url: "/blog" },
];

const slider = "slider here";
const sideNav =
  " heresideNav heresideNav heresideNav heresideNav heresideNav heresideNav hereideNav here sideNav here sideNav here sideNav here sideNav here sideNav here";

export const BooksPageLayout = (): string => {
  return `
<body>
<div class="${styles.retrainingContainer}">
<div class="${styles.headerContainer}">
${header}
</div>
<main>
    <section class="${styles.heroContainer}">
    ${slider}
    </section>
    <section class="${styles.contentContainer}">
        <aside class="${styles.sideNavContainer}">
        ${sideNav}
        </aside>
        <div class="${styles.bookGallery}">
        <div class="${styles.bookCard}"></div>
        <div class="${styles.bookCard}"></div>
        <div class="${styles.bookCard}"></div>
        <div class="${styles.bookCard}"></div>
        <div class="${styles.bookCard}"></div>
        <div class="${styles.bookCard}"></div>
        <div class="${styles.loadBtnContainer}">
        ${loadMoreBtn}
        </div>
        </div>
    </section>
</main>
</div>
</body>
`;
};
