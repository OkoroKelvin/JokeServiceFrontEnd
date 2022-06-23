import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import JokeService from '../services/JokeService'
import AuthContext from './Auth/Auth-context';

function ViewComments(props) {
    const [comments,setComments] = useState([])

    const {id} = useParams(); 
    const authCtx = useContext(AuthContext);


    useEffect(() => {
        getJokeComments()
      },[])
    const getJokeComments = async() =>{
      const requestOptions = {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authCtx.token}`,
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Origin': '*'
                },
    };

    try {
      const response = await fetch(`http://localhost:8081/api/v1/jokes/comment/${id}`, requestOptions)
      const data =await response.json()
      setComments(data.comments)
  }
  catch (err) {
      console.error(err)
  }

  };

    // const deleteComment = (commentId)=>{
    //     JokeService.deleteComment(commentId).then((response)=>{
    //         getJokeComments();
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // }
    const deleteComment = async(commentId)=>{
      const requestOptions = {
        method: 'DELETE',
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authCtx.token}`,
                'Access-Control-Allow-Methods': 'DELETE',
                'Access-Control-Allow-Origin': '*'
                },
    };
    try {
      const response = await fetch(`http://localhost:8081/api/v1/jokes/comment/${commentId}`, requestOptions)
      getJokeComments();  
  }
  catch (err) {
    console.error(err)
  }
  };


  return (
    <div className="container">
      {/* <h1 className="text-center"> Comments</h1> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Joke Comment</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map(
              comment => 
              <tr key = {comment.id}>
                <td>{comment.comment}</td>
                <td>
                <button className="btn btn-danger"  onClick={()=> deleteComment(comment.id)} size="sm">Delete</button>
                </td>                        
              </tr>

            )
          }
        </tbody>
  
      </table>

      </div>
  )
}
export default ViewComments;
