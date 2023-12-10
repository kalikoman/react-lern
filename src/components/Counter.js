import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    let increment = () => {
        setCounter(counter + 1)
    }

    let decrement = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}> + 1</button>
            <button onClick={decrement}> - 1</button>
        </div>
    );
};

export default Counter;
