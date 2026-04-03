import React from 'react'
import Button from '@mui/material/Button';
const MaterialUI = () => {
     let handleClick = ()=>{
    console.log("button wa clicked");
     }

 return (
    <>
    <h1>Material ui</h1>
    <Button variant="contained" onClick={handleClick}>Click me!</Button>
    <Button variant="contained"onClick={handleClick} color="error" size="large" >delete</Button>
    </>
  )
}
//you can use many thing from this library on your project reference google search material ui and you can use many librry functon and implement on your code ui/ux
export default MaterialUI
