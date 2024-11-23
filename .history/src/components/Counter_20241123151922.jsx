import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Total Click (count)`;
  }, [count]);

  const acrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Total Click : {count}</p>
      <button onClick={acrementCount}>Klik disini</button>
    </div>
  );
};

export default Counter;
