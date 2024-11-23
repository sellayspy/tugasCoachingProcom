import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const acrementCount = () => {
    setCount(count + 1);
  };
  return <div>Counter</div>;
};

export default Counter;
