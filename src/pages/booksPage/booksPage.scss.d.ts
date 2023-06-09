declare namespace BooksPageScssNamespace {
  export interface IBooksPageScss {
    adSquare: string;
    adSquareContainer: string;
    adSquareInnerWrap: string;
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
