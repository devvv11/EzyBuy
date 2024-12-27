import React from "react";
import './Reg.css'

function Reg(){
return(
<>
<div className="main-box">
        <div className="box1">
             <h2>Registrartion</h2>
                <label>Email</label>
                    <input type="email" /><br />
                <label>Password</label>
                      <input type="Password"/><br /> 
                <label>Confirm Password</label>
                <input type="Password"/><br /> 
                     <button className="btn">Register</button>
                     <div className="line" >
            <hr />
            <p>Already Have An Account? <a href="#"> Login</a>
            </p>
        </div>
        
        </div>
       
</div>
    
</>
);
}
export default Reg