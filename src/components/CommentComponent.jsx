import React, { useState} from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import JokeService from '../services/JokeService';
import AuthContext from './Auth/Auth-context';

function CommentComponent() {

    const [words,setComment] = useState('')
    const {id} = useParams(); 
    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/user"}
        )
    }


    const createComment = async (e) => {
        e.preventDefault();
        const requestOptions ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authCtx.token}`,
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Origin': '*'
                },
            body: JSON.stringify({words})    
        };
        try {
            const response = await fetch(`http://localhost:8081/api/v1/jokes/${id}`, requestOptions)
            const data = await response.json()
            console.log(data)
            alert("Comment Created, Thank You!!!")
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
                    <h2 className="text-center">Add Comment</h2>
                    <div className="card-body">
                        <form onSubmit={createComment}>
                            <div className="form-group mb-2">
                                {/* <label className = "form-label">Comment</label> */}
                                  <input
                                  type = "text"
                                  placeholder = "Enter your comment"
                                  name = "words"
                                  className="form-control"
                                  value = {words}
                                  onChange = {(e)=> setComment(e.target.value)}>
                                  </input>
                            </div>

                            <button type="submit"> submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
export default CommentComponent