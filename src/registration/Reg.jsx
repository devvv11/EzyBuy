import React, { useState } from "react";
import './Reg.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Reg(){
    const [name ,setName]=useState()
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/reg', {name , email , password })
            .then(result => console.log(result))
            .catch(error => console.log(error))
            navigate('/Login')
    }
return(
<>
<div className="main-box">
    <form onSubmit={handleSubmit}>
        <div className="box1">
             <h2>Registrartion</h2>
             <label>Name</label>
             <input type="text" onChange={(e) => setName(e.target.value)}/><br />

                <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/><br />

                <label>Password</label>
                      <input type="Password" onChange={(e) => setPassword(e.target.value)}/><br /> 
               
                     <button className="btn">Register</button>
                     <div className="line" >
            <hr />
            <p>Already Have An Account? <a href="#"> Login</a>
            </p>
        </div>
        
        </div>
        </form>
</div>
    
</>
);
}
export default Reg