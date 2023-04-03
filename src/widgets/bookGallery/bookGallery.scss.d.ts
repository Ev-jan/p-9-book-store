declare namespace BookGalleryScssNamespace {
  export interface IBookGalleryScss {
    bookCard: string;
    bookGallery: string;
    contentContainer: string;
    loadBtnContainer: string;
    sideNavContainer: string;
  }
}

declare const BookGalleryScssModule: BookGalleryScssNamespace.IBookGalleryScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BookGalleryScssNamespace.IBookGalleryScss;
};

export = BookGalleryScssModule;
