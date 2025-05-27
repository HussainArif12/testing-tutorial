import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button data-testid="increment" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <p data-testid="count-value">Count: {count}</p> {/* Count: 1*/}
    </>
  );
}

export default App;
