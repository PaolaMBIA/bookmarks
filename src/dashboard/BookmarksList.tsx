import { DataModel } from "../entities-interfaces/entities";

type BookmarksListProps = {
  bookmarks: DataModel[];
};
function BookmarksList(bookmarks: BookmarksListProps) {
  return (
    <div>
      {bookmarks.bookmarks.length !== 0 &&
        bookmarks.bookmarks.map((bookmark) => (
          <div key={bookmark.url}>
            {bookmark.type === "photo" && (
              <img src={bookmark.thumbnail_url} alt={bookmark.title} />
            )}
            {bookmark.type === "video" && (
              <div dangerouslySetInnerHTML={{ __html: bookmark.html }} />
            )}
          </div>
        ))}
    </div>
  );
}

export default BookmarksList;
