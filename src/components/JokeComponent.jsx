import React, { useState, useEffect, useContext } from 'react'
import { Link} from 'react-router-dom'
import JokeService from '../services/JokeService'
import AuthContext from './Auth/Auth-context'

function JokeComponent(props) {
  const [jokes,setJokes] = useState([])
  const authCtx = useContext(AuthContext);

 useEffect(() => {
  getJokes()
},[])


  
 const getJokes =async() => {
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
    const response = await fetch(`http://localhost:8081/api/v1/jokes/user-jokes/${authCtx.localId}`, requestOptions)
    const data =await response.json()
    console.log(data.jokes)
    setJokes(data.jokes)
}
catch (err) {
    console.error(err)
}
  };

  const deleteJoke = async(jokeId)=>{
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
    const response = await fetch(`http://localhost:8081/api/v1/jokes/${jokeId}`, requestOptions)
    getJokes();  
}
catch (err) {
  console.error(err)
}
};
 
  const likeJoke =async(jokeId)=>{

    const requestOptions = {
      method: 'PATCH',
      headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authCtx.token}`,
              'Access-Control-Allow-Methods': 'PATCH',
              'Access-Control-Allow-Origin': '*'
              },
  };
  try {
    const response = await fetch(`http://localhost:8081/api/v1/jokes/${jokeId}`, requestOptions)
    getJokes();  
}
catch (err) {
  console.error(err)
}   
};

  return (
    <div className="container">
      <h1 className="text-center"> Jokes</h1>
      <table className="table table-striped">
        <thead>
          <tr>  
            <th>Joke Content</th>
            <th>Joke Created Date</th>
            <th>Joke likes</th>
          </tr>
        </thead>
        <tbody>
          {
            jokes.map(
              joke => 
              <tr key = {joke.id}>
                <td>{joke.content}</td>
                <td>{joke.createdDate}</td>
                <td>{joke.likes}</td>
                <td>{joke.user_id}</td>
                <td>
                  <Link className="btn btn-info" to={`/comment/${joke.id}`} size="sm">Comment</Link>
                </td>
                <td>
                  <Link className="btn btn-info" to={`/view-comment/${joke.id}`} size="sm">View Comment</Link>
                  </td>
                <td>
                <button className="btn btn-danger" onClick={()=> deleteJoke(joke.id)} size="sm">Delete</button>
                  </td>
                <td>
                  <button className="btn btn-primary"onClick={()=> likeJoke(joke.id)} size="sm">Like</button>
                  </td>

                  <td>
                <Link className="btn btn-info" to={`/enter-mail/${joke.id}`} size="sm">Send</Link>
                </td>
                                      
              </tr>

            )
          }
        </tbody>
  
      </table>

      </div>
  )
}

export default JokeComponent

