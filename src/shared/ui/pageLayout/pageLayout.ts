import * as styles from "./pageLayout.scss";

export const PageLayout = (header: string, slider?: string, sideNav?: string) => {
    return `
<body>
<div class="${styles.headerContainer}">
${header}
</div>
<main>
    <section class="${styles.heroContainer}">
    ${slider}
    </section>
    <section class="${styles.contentContainer}">
        <aside class="">
        ${sideNav}
        </aside>
    </section>
</main>

</body>
`;
  }