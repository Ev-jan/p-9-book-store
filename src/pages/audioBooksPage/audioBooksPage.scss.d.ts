declare namespace AudioBooksPageScssNamespace {
  export interface IAudioBooksPageScss {
    adSquare: string;
    headerContainer: string;
    heroContainer: string;
    restrainingContainer: string;
  }
}

declare const AudioBooksPageScssModule: AudioBooksPageScssNamespace.IAudioBooksPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AudioBooksPageScssNamespace.IAudioBooksPageScss;
};

export = AudioBooksPageScssModule;
