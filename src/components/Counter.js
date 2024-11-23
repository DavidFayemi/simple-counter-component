import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleChangeCount = () => {
    setCount(count + 1);
  };
  const handlePlusTen = () => {
    setCount(count + 10);
  };
  const handleResetCount = () => {
    setCount(0);
  };
  return (
    <div className="count-container">
      <h1>Counter</h1>
      <h2 className="count-output">{count}</h2>
      <div className="count-buttons">
        <button className="count-button" onClick={handleChangeCount}>
          Count
        </button>
        <button
          className="count-button count-button--green"
          onClick={handlePlusTen}
        >
          +10
        </button>
        <button
          className="count-button count-button--red"
          onClick={handleResetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
