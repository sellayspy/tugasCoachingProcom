import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  handleChangeName = (e) => {
    setName(e.target.value);
  };
  return <div>Form</div>;
};

export default Form;
