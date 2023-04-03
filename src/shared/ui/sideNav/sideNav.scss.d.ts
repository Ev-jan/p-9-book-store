declare namespace SideNavScssNamespace {
  export interface ISideNavScss {
    active: string;
    categories: string;
    sideNav: string;
  }
}

declare const SideNavScssModule: SideNavScssNamespace.ISideNavScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SideNavScssNamespace.ISideNavScss;
};

export = SideNavScssModule;
