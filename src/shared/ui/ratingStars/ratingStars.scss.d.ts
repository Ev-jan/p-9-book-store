declare namespace RatingStarsScssNamespace {
  export interface IRatingStarsScss {
    overlay: string;
    starContainer: string;
  }
}

declare const RatingStarsScssModule: RatingStarsScssNamespace.IRatingStarsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RatingStarsScssNamespace.IRatingStarsScss;
};

export = RatingStarsScssModule;
