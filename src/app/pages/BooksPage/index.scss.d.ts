declare namespace IndexScssNamespace {
  export interface IIndexScss {
    booksPage: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IButtonScss;
};

export = IndexScssModule;
