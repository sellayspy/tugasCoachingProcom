import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState("#ffffff");
  const randomBackground = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: randomBackground,
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Counter />
      </div>
    </>
  );
}

export default App;
