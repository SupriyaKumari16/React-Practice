import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);//ismai hum intial value 0 se start kr rhe hai  jo state count v 0 se start hoga 

    let incCount=()=>{
        setCount(count+1);//updater jo new variable jo set kiye hai usko rerender krega
        console.log(count);
    };
    
    
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}