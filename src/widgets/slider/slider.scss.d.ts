declare namespace SliderScssNamespace {
  export interface ISliderScss {
    dotIndicator: string;
    dotIndicator_active: string;
    fade: string;
    slideShowContainer: string;
    slideShowControls: string;
    sliderContainer: string;
  }
}

declare const SliderScssModule: SliderScssNamespace.ISliderScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SliderScssNamespace.ISliderScss;
};

export = SliderScssModule;
