declare namespace GiftsPageScssNamespace {
  export interface IGiftsPageScss {
    adSquare: string;
    headerContainer: string;
    heroContainer: string;
    restrainingContainer: string;
  }
}

declare const GiftsPageScssModule: GiftsPageScssNamespace.IGiftsPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GiftsPageScssNamespace.IGiftsPageScss;
};

export = GiftsPageScssModule;
