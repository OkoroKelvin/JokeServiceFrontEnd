
import React, { useState} from 'react';
import axios from "axios";
import { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import JokeService from '../services/JokeService';
import AuthContext from './Auth/Auth-context';


function AddJoke () {

    const [userId, setUserId] = useState(null);
    
    const [content,setContents] = useState('')

    const authCtx = useContext(AuthContext);




    

    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/user"}
        )
    }

    const saveJoke = async (e) =>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authCtx.token}`,
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Origin': '*'
                    },
            body: JSON.stringify({userId: authCtx.localId, content })
        };
        try {
            const response = await fetch('http://localhost:8081/api/v1/jokes/user-create-jokes/', requestOptions)
            const data = await response.json()
            console.log(data)
            alert("Joke Created, Thank You!!!")
            handleNext();
        }
        catch (err) {
            console.error(err)
        }
    
      }

   
    
    return (
    <div>

       <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Add Joke</h2>
                    <div className="card-body">
                        <form onSubmit={saveJoke}>
                            <div className="form-group mb-2">
                                {/* <label className = "form-label">Joke Contents</label> */}
                                  <input
                                  type = "text"
                                  placeholder = "Enter Joke contents"
                                  name = "content"
                                  className="form-control"
                                  value = {content}
                                  onChange = {(e)=> setContents(e.target.value)}>
                                  </input>
                            </div>

                            <button type="submit"> submit</button>

                            

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddJoke;
