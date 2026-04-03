import "./App.css";
import React from "react";
import Lottery from "./components/Lottery";
// import Ticket from "./components/Ticket";
import {sum } from "./components/helper";
const App = () => {
  //ye hai jb hume diya rhe jaise 15 rehna chahiye sum ka tb ye work krega 
  // let winCondition = (ticket) => {
  //    return sum(ticket) ===15;
  // }
  
  //jb hume all number ek h rehna chhaiye tb hum ye condition lgayenge 
  // let winCondition = (ticket) => {
  //   return ticket.every((num)=> num=== ticket[0]);
  // }

  //agar humara ticket na number first number zero hai toh lottery win krgye 

  let winCondition =(ticket)=>{
    return ticket[0]=== 0;
  }
  return (
    <>
      <Lottery n={3}  winCondition={winCondition}/>
      
    </>
  );
};

export default App; 

