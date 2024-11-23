import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";
import Form from "./components/Form";

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
          backgroundColor: color,
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Counter />
        <Header title="My Profile" />
        <MyProfile
          npm="2428250061"
          nama="Riki Fauzia Nurjaman"
          github="https://github.com/sellayspy"
        />
        <Form />

        <button onClick={randomBackground}>Klik Untuk Ubah Warna</button>
      </div>
    </>
  );
}

export default App;
