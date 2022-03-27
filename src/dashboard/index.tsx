import "./index.css";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { DataModel } from "../entities-interfaces/entities";
import { fetchData } from "../service/fetchData";
import BookmarksList from "./BookmarksList";

function Dashboard() {
  const [url, setUrl] = useState<string>("");
  const [bookmarks, setBookmarks] = useState<DataModel[]>([]);
  const currentInputRef = useRef<{ value: string }>();

  let data: DataModel | undefined;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!bookmarks.find((bookmark) => bookmark?.url === url)) {
      data = await fetchData(url);
      data && setBookmarks([...bookmarks, data]);
    } else {
      alert("bookmark déjà existant");
    }
    setUrl("");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Entrez le lien:</label>
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUrl(event.target.value)
          }
        />
        <button type="submit">Confirmer</button>
      </form>

      {bookmarks && (
        <BookmarksList bookmarks={bookmarks} ref={currentInputRef} />
      )}
    </div>
  );
}

export default Dashboard;
