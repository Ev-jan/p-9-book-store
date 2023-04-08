
export interface INavigationItem {
    label: string;
    url: string;
  }

export interface ISlideImage {
  url: string;
  alt?: string;
}

export interface IBook {
  id: string;
  authors: string;
  title: string;
  averageRating: number;
  ratingsCount: number;
  description: string;
  amount: number;
  currencyCode: string;
  thumbnail: string;
}

export interface InavEvent extends Event {
  detail: { path: string }
}
