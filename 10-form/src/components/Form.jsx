import { useState } from "react";
export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });
    // let [fullName,setFullName]=useState("");
    // let [username,setUsername]=useState("");

    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // }
    // let handleUsername = (event) =>{
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) =>{
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);//fullname

        setFormData((currData) => {
            // currData[fieldName]=newValue;
            return{...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
             fullName: "",
            username: "",
            password: "",
        })
             
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlfor="username">Full Name</label>
            <input placeholder="Enter your name:" 
            type="text"
            value={formData.fullName}
             onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br></br>
            <br></br>
            <label htmlfor="username">Username</label>
            <input placeholder="Enter user name:" 
            type="text"
            value={formData.username}
             onChange={handleInputChange}
            id="username"
            name="username"
            />
            <br></br>
            <br></br>
            <label htmlfor="password">Password</label>
            <input placeholder="Enter user name:" 
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    )
}