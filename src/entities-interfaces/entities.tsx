export interface Video {
  commonField: Common;
  duration: string;
}

export interface Image {
  commonField: Common;
  height: number;
  width: number;
}

interface Common {
  id: string;
  overview?: string;
  author_name: string;
  url: string;
  title: string;
  dateAdded: string;
  dateOfPublication: string;
}
