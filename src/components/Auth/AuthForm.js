 
import classes from './AuthForm.module.css';
import React, { useState, useRef, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './Auth-context';
import axios from "axios";
import {Form, Spinner} from "react-bootstrap";
// import {toast} from "react-toastify";


const AuthForm =() => {
  const navigate = useNavigate();
  
    const [state, setState] = useState({
      email: "",
      password: "",
    });
    const [loading, setLoading] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    
    const emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
    const handleEmailError = (e) => {
     
      if (!state.email.match(emailRegex) && state.email !== ""){
        setEmailErrorText(true);
      } else {
        setEmailErrorText(false);
      }
    }

    const handlePasswordError = (e) => {

      if (state.password.length < 7 && state.password !== ""){
        setPasswordErrorText(true);
      }else {
        setPasswordErrorText(false);
      }
    }

    useEffect(() => {
      const {email, password} = state;

      email === "" || password === "" || password.length < 7 ||
      !email.match(emailRegex) || passwordErrorText || emailErrorText ?
       setDisableButton(true) : setDisableButton(false);
    },[passwordErrorText, emailErrorText, state]);

    const submitHandler = async(e) =>{
      e.preventDefault();
      setLoading(true);

      const {response} = await axios.post("http://localhost:8081/api/v1/jokes/login-user", {state} , {
         headers: {'Content-Type': 'application/json'},
       withCredentials: false
      });

      axios.defaults.headers.common['Authorization'] = `Bearer ${response['token']}`





     // try {
        // const response = await axios.post("http://localhost:8081/api/v1/jokes/login-user", state , {
        //   headers: {'Content-Type': 'application/json'}
        // });

      //  if (response.status === 200){




         // toast.success("Welcome Back");
        // alert("success")
        // console.log(response.data);
        //   navigate("/welcome")
        // }else if (response.status === 500){
        // toast.error(response?.data?.message || "User does not exist");
       // alert("user does not exist")
    //   }
    //  }catch (error){
    //   throw error;
    //  }
   



    // fetch('http://localhost:8081/api/v1/jokes/login-user',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
          
    //     }),
    //     headers:{
          
    //     }
    //   }
    // ).then(res=>{
    //   setIsLoading(false);

    //   if(res.ok){
    //     return res.json();
      
    //   }else{
    //     return res.json().then(data => {
    //       let errorMessage = 'Authentication failed!';
    //       throw new Error(errorMessage);
    //     });
    //   }
    // })
    // .then((data)=>{
    //  // const exprationTime = 3000;
    //   //authCtx.login(data.token,exprationTime.toISOString());
    //  // handleNext()     
    //  console.log(data)
    // })
    // .catch(err => {
    //   alert("Not Registeed User or Wrong details")
    // });
  }
  
  return (
    <section className={classes.auth}>

      <Form.Group>
        <Form.Label>Your Email</Form.Label>
        <Form.Control 
        type='email'
        value={state.email}
        onChange={(e) => setState({...state, email: e.target.value})}
        onBlur={handleEmailError}
        onFocus={() => setEmailErrorText(false)}
        />
        <Form.Text className='text-danger'>{emailErrorText && "Pls enter a valid email"}</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Your Password</Form.Label>
        <Form.Control 
        type='password'
        value={state.password}
        onChange={(e) => setState({...state, password: e.target.value})}
        onBlur={handlePasswordError}
        onFocus={() => setPasswordErrorText(false)}
        />
         <Form.Text className='text-danger'>{passwordErrorText && "Password must contain at least 7 characters"}</Form.Text>
      </Form.Group>
        {/* <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email'  required ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password'  required ref={passwordInputRef}/>
        </div>

        <div className='
        {classes.actions}>
          <button> Submit </button>
        </div>
        </form> */}

        <button disabled={disableButton} onClick={submitHandler}>
          {loading ? (<Spinner  />) : ("submit")}
        </button>
    </section>
  );
};







export default AuthForm;
