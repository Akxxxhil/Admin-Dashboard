import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  function plusHandler() {
    setCount(count + 1);
  }
  function minusHandler() {
    setCount(count - 1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <>
      <div className="container">
        <button onClick={plusHandler}>Plus</button>
        <p className="result" id="number">
        {count}
        </p>
        <button onClick={minusHandler}>Minus</button>
      </div>

      <div className="reset">
        <button onClick={resetHandler}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
