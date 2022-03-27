import "./index.css";
import { DataModel } from "../entities-interfaces/entities";
import { getDateFormat, getDuration, getMonth, getTimeDiff } from "../utils";

interface BookmarksListProps {
  bookmarks: DataModel[];
  setBookmarks: (value: DataModel[]) => void;
}

const BookmarksList = ({ bookmarks, setBookmarks }: BookmarksListProps) => {
  const handleDelete = (url: string) => {
    setBookmarks(bookmarks?.filter((bookmark) => bookmark?.url !== url));
  };

  return (
    <div className="bookmark-block">
      {bookmarks &&
        bookmarks.map((bookmark) => (
          <div key={bookmark.url}>
            <p>
              Lien:
              <a href={bookmark.url} target="_blank" rel="noreferrer">
                {bookmark.url}
              </a>
            </p>

            <p>Titre: {bookmark.title}</p>
            <p>Auteur: {bookmark.author_name}</p>
            {bookmark.type === "photo" ? (
              <>
                <img src={bookmark.overView} alt={bookmark.title} />
                <p>
                  largeur: {bookmark.width}, hauteur: {bookmark.height}
                </p>
              </>
            ) : (
              bookmark.type === "video" && (
                <>
                  {bookmark.overView && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: bookmark.overView,
                      }}
                    />
                  )}
                  <p>
                    Durée: {bookmark.duration && getDuration(bookmark.duration)}
                  </p>
                </>
              )
            )}
            <p>
              Date de publication: il y'a {getTimeDiff(bookmark.release_time)}
            </p>
            {
              <p>
                Date d'ajout dans l'application: le{" "}
                {getDateFormat(bookmark.upload_date)[0]}{" "}
                {getMonth(getDateFormat(bookmark.upload_date)[1])}{" "}
                {getDateFormat(bookmark.upload_date)[2]}
              </p>
            }

            <button onClick={() => handleDelete(bookmark.url)}>
              Supprimer
            </button>
          </div>
        ))}
    </div>
  );
};

export default BookmarksList;
