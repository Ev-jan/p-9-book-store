declare namespace BooksPageLayoutScssNamespace {
  export interface IBooksPageLayoutScss {
    bookCard: string;
    bookGallery: string;
    contentContainer: string;
    headerContainer: string;
    heroContainer: string;
    loadBtnContainer: string;
    retrainingContainer: string;
    sideNavContainer: string;
  }
}

declare const BooksPageLayoutScssModule: BooksPageLayoutScssNamespace.IBooksPageLayoutScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BooksPageLayoutScssNamespace.IBooksPageLayoutScss;
};

export = BooksPageLayoutScssModule;
