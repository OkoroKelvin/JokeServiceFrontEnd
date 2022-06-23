import { useContext, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import classes from './MainNavigation.module.css'


import React from 'react'
import AuthContext from './Auth/Auth-context';

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/user"}
        )
    }


   const logoutHandler =()=>{
    authCtx.logout();
    handleNext();
    }



  return (
    <header className={classes.header}>
        <Link to='/'>
        <div className={classes.logo}> JOKE SERVICE</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn &&(
            <li>
            <Link to='/login'>Login</Link>
          </li>
          )}
          {!isLoggedIn &&(
            <li>
            <Link to='/signup'>Signup</Link>
          </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation;



