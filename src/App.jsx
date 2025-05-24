import { useState } from "react";
import "./App.css";

const MODRINTH_SEARCH_URL = "https://api.modrinth.com/v2/search?";
const MODRINTH_VERSION_URL =
  "https://api.modrinth.com/v2/project/{id|slug}/version";

const App = () => {
  const [results, setResults] = useState([]);

  const updateSearch = (keywords) =>
    fetch(
      MODRINTH_SEARCH_URL +
        new URLSearchParams({
          query: keywords,
          limit: 20,
        })
    )
      .then((r) => r.json())
      .then((_) => _.hits)
      .then(setResults);

  return (
    <>
      <input
        type="text"
        className="input focus:outline-none"
        onKeyDown={(evt) =>
          evt.key == "Enter" && updateSearch(evt.currentTarget.value)
        }
      />
      <div>
        {results.map((mod, i) => (
          <div key={i} className="flex">
            <div
              style={{ backgroundImage: `url(${mod.icon_url})` }}
              className="min-h-10 min-w-10 bg-cover bg-no-repeat bg-center"
            ></div>
            {mod.title} {mod.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
