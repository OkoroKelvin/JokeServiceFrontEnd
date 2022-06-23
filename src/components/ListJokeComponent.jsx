// import React, { Component } from 'react';
// import JokeService from '../services/JokeService';

// class ListJokeComponent extends Component {
//     constructor(props){
//         super(props)
         
//         this.state = {
//             jokes:[]
//         }
        


//     }

//     componentDidMount(){
//         JokeService.getJokes().then((res) => {
//             console.log("here");
//             console.log(res);
//             this.setState({jokes: res.data});
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Joke List</h2>
//                 <div className="row">
//                     <table className = "table table-stripped table-bordered">

//                         <thead>
//                             <tr>
//                                 <th>Joke Content</th>
//                                 <th>Joke Created Date</th>
//                                 <th>Joke Likes</th>
//                             </tr>

//                             <tbody>
//                                 {
//                                     this.state.jokes.map(
//                                         joke =>
//                                         <tr key = {joke.id}>
//                                             <td>{joke.content}</td>
//                                             <td>{joke.createdDate}</td>
//                                             <td>{joke.likes}</td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
                        
//                         </thead>

//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ListJokeComponent;