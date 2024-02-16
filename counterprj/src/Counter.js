import React, { useState } from 'react';
import './style.css';

function Counter() {
    const [count, setcount] = useState(0);
    const increment = () => setcount(count+1);
    const decrement = () => setcount(count-1);
  return (
    <>
    <div className='container'>
        <h1 className='number'>{count}</h1>
    </div>
    <button onClick={increment}>
        +1
    </button>
    <button onClick={decrement}>
        -1
    </button>
    </>
  )
}

export default Counter