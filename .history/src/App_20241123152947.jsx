import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("#ffffff");
  const randomBackground = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
