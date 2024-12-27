import React from "react";
import './Login.css'

function Login(){
return(
<>
<div className="main-box">
        <div className="box1">
             <h2>Login</h2>
                <label>Email</label>
                    <input type="email" /><br />
                <label>Password</label>
                      <input type="Password"/><br /> 
                      <a href="#">Forgot Password?</a><br />
                     <button className="btn">Login</button>
                     <div className="line" >
            <hr />
            <p>Don't Have An Account.? <a href="#">Create An Account</a>
            </p>
        </div>
        
        </div>
       
</div>
    
</>
);
}
export default Login