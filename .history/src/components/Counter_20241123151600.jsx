import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Total Click ${count}`;
  }, [count]);

  const acrementCount = () => {
    setCount(count + 1);
  };
  return <div></div>;
};

export default Counter;
