import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  handleChangeName = (e) => {
    setName(e.target.value);
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
      <button>Submit</button>
    </div>
  );
};

export default Form;
