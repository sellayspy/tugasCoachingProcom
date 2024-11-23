import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [color, setColor] = useState();
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
