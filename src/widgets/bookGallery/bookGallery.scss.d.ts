declare namespace BookGalleryScssNamespace {
  export interface IBookGalleryScss {
    bookCard: string;
    bookGallery: string;
    contentContainer: string;
    diagonal: string;
    horizontal: string;
    loadBtnContainer: string;
    part1: string;
    part2: string;
    sideNavContainer: string;
    sidebarIconToggle: string;
    spinner: string;
  }
}

declare const BookGalleryScssModule: BookGalleryScssNamespace.IBookGalleryScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BookGalleryScssNamespace.IBookGalleryScss;
};

export = BookGalleryScssModule;
