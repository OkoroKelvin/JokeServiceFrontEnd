import React, { useState, useEffect } from 'react'
import JokeService from '../services/JokeService';

function LeastLikedJokes(props) {
    const [jokes,setJokes] = useState([])


    useEffect(() => {
        getLeastJokes()
      },[])


    const getLeastJokes =() => {
       JokeService.getLeastLikeJokes().then((response)=>{
        console.log("hi");
        setJokes(response.data.jokes);
       // console.log(response.data.jokes)
       console.log(jokes)

       });
    };


  return (
    <div className="container">
    <h1 className="text-center"> List of Jokes From Least to Most</h1>
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
            </tr>
          )
        }
      </tbody>

    </table>

    </div>
  )
}
export default LeastLikedJokes 
