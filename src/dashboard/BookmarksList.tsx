import React from "react";
import { useEffect, useState } from "react";
import { DataModel } from "../entities-interfaces/entities";

interface BookmarksListProps {
  bookmarks: DataModel[];
}

const BookmarksList = React.forwardRef(
  ({ bookmarks }: BookmarksListProps, ref) => {
    const [newBookMarks, setNewBookMarks] = useState<DataModel[]>([]);
    const [urlDeleted, setUrlDeleted] = useState<string>("");

    useEffect(() => {
      setNewBookMarks(bookmarks);
    }, [bookmarks]);

    const handleDelete = (url: string) => {
      setNewBookMarks(
        newBookMarks?.filter((bookmark) => bookmark?.url !== url)
      );

      setUrlDeleted(url);
    };

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "50px",
        }}
      >
        {newBookMarks &&
          newBookMarks.map((bookmark) => (
            <div key={bookmark.url}>
              <p>
                Lien:{" "}
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
                        dangerouslySetInnerHTML={{ __html: bookmark.overView }}
                      />
                    )}
                    <p>Durée: {bookmark.duration}</p>
                  </>
                )
              )}
              <p>Date de publication: {bookmark.release_time}</p>
              <p>Date d'ajout dans l'application: {bookmark.upload_date}</p>
              <button onClick={() => handleDelete(bookmark.url)}>
                Supprimer
              </button>
            </div>
          ))}
      </div>
    );
  }
);

export default BookmarksList;
