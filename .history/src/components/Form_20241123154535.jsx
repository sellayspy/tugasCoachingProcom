import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />
    </div>
  );
};

export default Form;
