import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1);
  };
  const handleCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleCountMinus}>-</button>
      <p>{count}</p>
      <button onClick={handleCountPlus}>+</button>
    </div>
  );
};

export default App;
