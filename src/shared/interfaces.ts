
export interface INavigationItem {
    label: string;
    url: string;
  }

export interface ISlideImage {
  url: string;
  alt?: string;
}

export interface IBook {
  authors: string;
  title: string;
  averageRating: number;
  ratingsCount: number;
  description: string;
  amount: number;
  currencyCode: string;
  thumbnail: string;
}

