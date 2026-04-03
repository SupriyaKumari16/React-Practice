import {useState} from "react";
export default function Ludo(){
let [moves, setMoves]= useState({blue:0, red:0, yellow: 0, green: 0});
let [arr, SetArr]= useState([]);
    // let [blueMove, setBlueMove]=useState(0);
    // let [yellowMove, setYellowmove]=useState(0);
    // let [greenMove, setGreenMove]=useState(0);
    // let [redMove, setRedMove]=useState(0);

    let updateBlue = ()=>{
        // moves.blue +=1;
        // console.log(`moves.blue= ${moves.blue}`);
        // setMoves({...moves, blue:moves.blue + 1 });
        setMoves((prevMoves) => {
            return {
                ...prevMoves, blue: prevMoves.blue + 1
            };
        });
        SetArr((prevArr) => {
    return [...prevArr, "blue moves"];
});
        console.log(arr);
    };

    
        let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow+1}
        });
    }
        let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green+1}
        });
    }
        let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red+1}
        });
    }
    
    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor: "skyblue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}