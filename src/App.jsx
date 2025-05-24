import { useState } from "react";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
};
