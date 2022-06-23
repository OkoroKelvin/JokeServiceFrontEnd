import axios from "axios";
import { useNavigate} from 'react-router-dom';
import {useState, useContext} from "react";
import React from "react";
import classes from './AuthForm.module.css';
import AuthContext from "./Auth-context";


function Kelvin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx =  useContext(AuthContext);
  const navigate = useNavigate();
 


  const handleNext = () => {
    navigate("/user")
    
  }
  
  const submit = async e =>{
    e.preventDefault();
    const response = await axios.post("http://localhost:8081/api/v1/jokes/login-user",{
      email,password
    }, 
    { headers: {'Content-Type': 'application/json'},
      withCredentials: true
    });

 // const expirationTime = new Date(new Date().getTime() + (+ response.data.expiresIn * 1000));  
    
   authCtx.login(response.data.token,response.data.localId,response.data.email,response.data.firstName);
   handleNext();
  }


  return (
   <section className={classes.auth}>
    <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className={classes.control}>
                <input type="email" id="email" placeholder="email"
                       onChange={e => setEmail(e.target.value)}
                />
              </div>

            <div className={classes.control}>
                <input type="password"  id="password" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
              
            </div>

            <button type="submit">Login</button>
        </form>

   </section>
  )
}

export default Kelvin
