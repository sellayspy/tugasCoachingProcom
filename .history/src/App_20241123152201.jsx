import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("#ffffff");
  const randomBackground = () => {};
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
