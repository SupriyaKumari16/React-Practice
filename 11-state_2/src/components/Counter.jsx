import {useState, useEffect} from "react";

export default function Counter(){
    let [Countx, setCountx] = useState(0);
    let [County, setCounty] = useState(0);

    let incCountx = ()=>{
        setCountx((currCount) => currCount + 1);
    }
    let incCounty = ()=>{
        setCounty((currCount) => currCount + 1);
    }

    useEffect(function printSomething(){
        console.log("this is a side-effect")
    })
    return(
        <div>
            <h3>countx = {Countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>County={County}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}