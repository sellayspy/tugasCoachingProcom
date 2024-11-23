import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("#ffffff");
  const randomBackground = () => {
    const randomColor = `#${Math.floor(Math.random() * )}`
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
