import { useState } from "react";
import { Video, Image } from "../entities-interfaces/entities";

type BookmarksListProps = {
  bookmarks: {}[];
};
function BookmarksList(bookmarks: BookmarksListProps) {
  console.log(bookmarks);
  return <div>BookmarksList</div>;
}

export default BookmarksList;
