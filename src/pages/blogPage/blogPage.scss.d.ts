declare namespace BlogPageScssNamespace {
  export interface IBlogPageScss {
    adSquare: string;
    headerContainer: string;
    heroContainer: string;
    restrainingContainer: string;
  }
}

declare const BlogPageScssModule: BlogPageScssNamespace.IBlogPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BlogPageScssNamespace.IBlogPageScss;
};

export = BlogPageScssModule;
