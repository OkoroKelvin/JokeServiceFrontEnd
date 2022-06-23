import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import JokeService from '../services/JokeService';
import validator from 'validator';
import { useContext } from 'react';
import AuthContext from './Auth/Auth-context';


function SendJoke(props) {

    const [email,setEmail] = useState("")
    const [emailError,setEmailError] = useState("");
    const {id} = useParams(); 
    const authCtx = useContext(AuthContext)


    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/message")
    }


   

    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(email)
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email')
        } else {
          setEmailError('Enter valid Email!')
        }
      }


    const createEmail = async(e) =>{

        e.preventDefault();
        const savedEmail = {email: email}

        // JokeService.sendJokesToEmail(id,savedEmail).then((respond)=>{
        //     handleNext();

        // }).catch(error => {
        //     console.log(error)
        // })

        const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authCtx.token}`,
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Origin': '*'
                    },
            body: JSON.stringify({email})
        };
        try {
            const response = await fetch(`http://localhost:8081/api/v1/jokes/send-jokes/${id}`, requestOptions)
            const data = await response.json()
            console.log(data)
            alert("Mail sent, Thank You!!!")
            handleNext();
        }
        catch (err) {
            console.error(err)
        }

    };


    
    
  return (
    <div>

       <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Input Email</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className = "form-label">Email Address</label>
                                  <input
                                  type = "text"
                                  placeholder = "Kindly Enter your Email Address"
                                  name = "email"
                                  className="form-control"
                                  value = {email}
                                  onChange = {(e) => validateEmail(e)}>
                                  </input>
                                  <br></br>
                                  <span style={{fontWeight: 'bold',color: 'red',}}>{emailError}</span>
                            </div>

                            <button className="btn btn-success"onClick = {(e) => createEmail(e)}> send</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendJoke;