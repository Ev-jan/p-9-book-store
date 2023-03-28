declare namespace HeaderNavBarScssNamespace {
    export interface IHeaderNavBarScss {
      headerNavBar: string;
    }
  }
  
  declare const HeaderNavBarScssModule: HeaderNavBarScssNamespace.IHeaderNavBarScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: HeaderNavBarScssNamespace.IHeaderNavBarScss;
  };
  
  export = HeaderNavBarScssModule;
  