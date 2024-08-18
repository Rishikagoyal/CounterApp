import React, {useState} from 'react';
import Button from './Button';

const Counter=()=>{
    const[count,setCount]=useState(0);

    const handleIncrease=()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>{
        setCount(count-1);
    }
    return(
        <>
        <h2>Counter App</h2>
        <br/>
        <p>Count: {count}</p>
        <Button title="Increment" handleClick={handleIncrease}/>
        <Button title="Decrement" handleClick={handleDecrease}/>

        </>
    )
}

export default Counter;