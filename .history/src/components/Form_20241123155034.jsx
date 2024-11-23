import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Nama anda adalah ${name}`);
  };
  return (
    <div>
      <label>Masukan nama : </label>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Masukan nama"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Nama Anda : {name}</p>
    </div>
  );
};

export default Form;
