declare namespace PageLayoutScssNamespace {
  export interface IPageLayoutScss {
    heroContainer: string;
    headerContainer: string;
    contentContainer: string;
  }
}

declare const PageLayoutScssModule: PageLayoutScssNamespace.IPageLayoutScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageLayoutScssNamespace.IPageLayoutScss;
};

export = PageLayoutScssModule;
