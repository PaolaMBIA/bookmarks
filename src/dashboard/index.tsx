import { ChangeEvent, FormEvent, useState } from "react";

function Dashboard() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/embed?dataType=json&url=${url}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

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
