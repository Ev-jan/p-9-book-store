declare namespace LoaderScssNamespace {
  export interface ILoaderScss {
    loader: string;
  }
}

declare const LoaderScssModule: LoaderScssNamespace.ILoaderScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoaderScssNamespace.ILoaderScss;
};

export = LoaderScssModule;
