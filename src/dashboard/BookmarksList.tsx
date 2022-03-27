import React, { useImperativeHandle } from "react";
import { Fragment, useEffect, useState } from "react";
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
        newBookMarks?.filter((bookmark: DataModel) => bookmark.url !== url)
      );

      setUrlDeleted(url);
    };

    // useImperativeHandle(ref, () => ({
    //   value: urlDeleted,
    // }));

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "50px",
        }}
      >
        {newBookMarks.length !== 0 &&
          newBookMarks.map((bookmark) => (
            <div key={bookmark.url}>
              <a href={bookmark.url} target="_blank" rel="noreferrer">
                {bookmark.url}
              </a>
              <p>{bookmark.title}</p>
              <p>{bookmark.author_name}</p>
              {bookmark.type === "photo" ? (
                <>
                  <img src={bookmark.thumbnail_url} alt={bookmark.title} />
                  <p>
                    largeur: {bookmark.width}, hauteur: {bookmark.height}
                  </p>
                </>
              ) : (
                bookmark.type === "video" && (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: bookmark?.html }} />
                    <p>{bookmark.duration}</p>

                    <p>{bookmark.upload_date}</p>
                  </>
                )
              )}
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
