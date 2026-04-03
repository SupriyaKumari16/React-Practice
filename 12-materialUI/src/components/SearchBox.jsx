import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
const SearchBox = () => {

    let [city, setCity] = useState("");

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
    }
  return (
    <div className='SearchBox'>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="cityname" 
        variant="outlined" 
        required
        value={city}
        onChange={handleChange}
        />
      <br></br><br></br>
      <Button variant="contained" type="submit">
        Search
      </Button>
      </form>
      
    </div>
  )
}

export default SearchBox


