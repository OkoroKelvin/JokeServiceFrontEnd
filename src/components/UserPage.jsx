import { useContext, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import React from 'react'
import AuthContext from './Auth/Auth-context';

function UserPage() {

   // const [email, setEmail] = useState('');
    const authCtx =  useContext(AuthContext);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/user"}
        )
    }
    const logoutHandler =()=>{
      authCtx.logout();
      navigate("/home")
    }
     
    //console.log(authCtx.email);
    return (
        <header className={classes.header}>
            
            <div className={classes.logo}> Welcome {authCtx.firstName}</div>
 
    
          <nav>
    
            <ul>
    
                <li>
                <Link to='/add-joke'>Create Joke</Link>
              </li>
              
    
    
            
                <li>
                <Link to='/jokes'>Veiw all Joke</Link>
              </li>
              
    
    
              
                <li>
                <button onClick={logoutHandler}>Logout</button>
             </li>
            </ul>
          </nav>
        </header>
      )
 
    
}

export default UserPage