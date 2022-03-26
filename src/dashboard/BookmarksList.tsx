import { DataModel } from "../entities-interfaces/entities";

type BookmarksListProps = {
  bookmarks: DataModel[];
};
function BookmarksList(bookmarks: BookmarksListProps) {
  return (
    <div>
      {bookmarks.bookmarks.length !== 0 &&
        bookmarks.bookmarks.map((bookmark) => (
          <div
            key={bookmark.url}
            style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
          >
            {bookmark.type === "photo" && (
              <div>
                <a href={bookmark.url} target="_blank" rel="noreferrer">
                  {bookmark.url}
                </a>
                <p>{bookmark.title}</p>
                <p>{bookmark.author_name}</p>
                <img src={bookmark.thumbnail_url} alt={bookmark.title} />
                <p>
                  largeur: {bookmark.width}, hauteur: {bookmark.height}
                </p>
              </div>
            )}
            {bookmark.type === "video" && (
              <div>
                <a href={bookmark.url}>{bookmark.url}</a>
                <p>{bookmark.title}</p>
                <p>{bookmark.author_name}</p>
                <div dangerouslySetInnerHTML={{ __html: bookmark?.html }} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default BookmarksList;
