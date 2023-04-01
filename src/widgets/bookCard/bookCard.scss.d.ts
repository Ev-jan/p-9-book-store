declare namespace BookCardScssNamespace {
  export interface IBookCardScss {
    author: string;
    bookCard: string;
    bookData: string;
    buttonContainer: string;
    cover: string;
    coverContainer: string;
    description: string;
    price: string;
    ratingBar: string;
    reviewCount: string;
    title: string;
  }
}

declare const BookCardScssModule: BookCardScssNamespace.IBookCardScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BookCardScssNamespace.IBookCardScss;
};

export = BookCardScssModule;
