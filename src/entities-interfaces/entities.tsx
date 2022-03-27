export interface Video {
  video_id: string;
  duration: number;
}
export interface Image {
  photo_id: string;
  flickr_type?: string;
  height: number;
  width: number;
}

export interface DataModel {
  video_id?: string;
  photo_id?: string;
  flickr_type?: string;
  overView?: string;
  url: string;
  title: string;
  type: string;
  author_name: string;
  upload_date: string;
  release_time: string;
  height?: number;
  width?: number;
  duration?: number;
}
