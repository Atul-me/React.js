import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  let count1 = 0;
  return (
    <div className="border border-black w-96 h-96">
      <div className="set">
        <button onClick={setCount(count + 1)}>+1</button>
        <span>{count}</span>
      </div>
      <div className="set1">
        <button onClick={() => count1 += 1}>+1</button>
        <span>{count1}</span>
      </div>
    </div>
  );
};

export default Demo;
