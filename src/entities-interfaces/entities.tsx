export interface DataModel {
  id: string;
  type: string;
  thumbnail_url: string;
  overview?: string;
  author_name: string;
  url: string;
  title: string;
  dateAdded?: string;
  dateOfPublication?: string;
  html: string;
  height?: number;
  width?: number;
  duration?: string;
}
