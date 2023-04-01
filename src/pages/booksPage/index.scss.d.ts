declare namespace IndexScssNamespace {
  export interface IIndexScss {
    bookCard: string;
    bookGallery: string;
    contentContainer: string;
    headerContainer: string;
    heroContainer: string;
    loadBtnContainer: string;
    restrainingContainer: string;
    sideNavContainer: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
