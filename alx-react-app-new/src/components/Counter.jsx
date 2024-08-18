import { useState } from "react";

function Counter() {
    return(
        <div>
            const [count, setCount] = useState(0);
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default Counter;