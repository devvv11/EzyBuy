import {useState} from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => 
        {
            e.preventDefault()
            axios.post('http://localhost:3001/Login',{ email , password })
            .then(result => {
               console.log(result)
               if(result.data === "Welcome")
               {
                    navigate('/')
               }
            })
            .catch(error => console.log(error))
        }
return(
<>
    <div className="main-box">
        <form onSubmit={handleSubmit}>
         <div className="box1">
             <h2>Login</h2>
                <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/><br />
                <label>Password</label>
                      <input type="Password" onChange={(e) => setPassword(e.target.value)}/><br /> 
                      <a href="#">Forgot Password?</a><br />
                     <button className="btn">Login</button>
                     <div className="line" >
            <hr />
            <p>Don't Have An Account.? <a href="#">Create An Account</a>
            </p>
        </div>
        
        </div>
    </form>   
</div>
    
</>
    );
}
export default Login