import { ChangeEvent, FormEvent, useState } from "react";
import { useFetch } from "../hook/useFetch";

function Dashboard() {
  const [url, setUrl] = useState<string>("");
  const [{ state, error, loading }, fetchData] = useFetch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(url);
    setUrl("");
  };

  return (
    <div className="App">
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
