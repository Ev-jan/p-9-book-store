declare namespace BooksPageScssNamespace {
  export interface IBooksPageScss {
    headerContainer: string;
    heroContainer: string;
    restrainingContainer: string;
  }
}

declare const BooksPageScssModule: BooksPageScssNamespace.IBooksPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BooksPageScssNamespace.IBooksPageScss;
};

export = BooksPageScssModule;
