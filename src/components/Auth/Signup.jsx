import classes from './AuthForm.module.css';
import React from 'react';
import { useRef,useState,useContext} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import AuthContext from "./Auth-context";


function Signup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const authCtx =  useContext(AuthContext);

    const handleNext = () => {
      navigate("/usermail")
    }
    
  const submit = async (e) =>{
    authCtx.logout();
    e.preventDefault();
    const response = await axios.post("http://localhost:8081/api/v1/jokes/register-user",{
      firstName,lastName,email,password
    },
    {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    //withCredentials: true
    });
    console.log(response.json)
      handleNext();
  };

  return (
    <section className={classes.auth}>
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className={classes.control}>
         <input type="text" id="firstName" placeholder="First Name" onChange={e =>setFirstName(e.target.value)}/>
        </div>   

        <div className={classes.control}>
        <input type="text" id="lastName" placeholder="Last Name" onChange={e =>setLastName(e.target.value)}/>
        </div> 

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

        <button type="submit">Create</button>
        </form>
    </section>
  )
}
export default Signup;
