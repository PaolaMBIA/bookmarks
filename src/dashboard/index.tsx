import { ChangeEvent, FormEvent, useState } from "react";
import { Video, Image } from "../entities-interfaces/entities";
import { useFetch } from "../hook/useFetch";
import BookmarksList from "./BookmarksList";

function Dashboard() {
  const [url, setUrl] = useState<string>("");
  const [{ state, error, loading }, fetchData] = useFetch();
  const [bookmarks, setBookmarks] = useState<{}[]>([state]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(url);
    setBookmarks([...bookmarks, state]);
    setUrl("");
  };

  return (
    <div className="App">
      {bookmarks && <BookmarksList bookmarks={bookmarks} />}

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
    </div>
  );
}

export default Dashboard;
