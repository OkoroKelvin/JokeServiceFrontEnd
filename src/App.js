import React, { useContext } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import ViewJokePage from './components/ViewJokePage';
import AddJoke from './components/AddJoke';
import JokeComponent from './components/JokeComponent';
import CommentComponent from './components/CommentComponent';
import MostLikedJokes from './components/MostLikedJokes';
import LeastLikedJokes from './components/LeastLikedJokes';
import ViewComments from './components/ViewComments';
import SendJoke from './components/SendJoke';
import MessageMail from './components/MessageMail';
import MainNavigation from './components/MainNavigation';
import AuthForm from './components/Auth/AuthForm';
import Signup from './components/Auth/Signup';
import SuccessMessage from './components/SuccessMessage';
import Welcome from './components/Welcome';
import Kelvin from './components/Auth/Kelvin';
import UserPage from './components/UserPage';
import AuthContext from './components/Auth/Auth-context';





function App() {
  const authCtx = useContext(AuthContext);
  return (
 // <AuthContextProvider>
    <BrowserRouter>
      <Routes>

      {authCtx.isLoggedIn && (
        <Route path="/" element={<LandingPage/>} />
      )}

        {authCtx.isLoggedIn && (
        <Route path="/menu" element={<MenuPage/>} />
        )}

        {authCtx.isLoggedIn && (
        <Route path="/view-all" element={<ViewJokePage/>} />
        )}

        {authCtx.isLoggedIn && (
        <Route path="/add-joke" element={<AddJoke/>} />
        )}

          {authCtx.isLoggedIn && ( 
        <Route path="/jokes" element={<JokeComponent/>} /> 
          )}

        {authCtx.isLoggedIn && (
        <Route path="/comment/:id" element={<CommentComponent/>} /> 
        )}

        {authCtx.isLoggedIn && (
        <Route path="/jokes/most" element={<MostLikedJokes/>} /> 
        )}

        {authCtx.isLoggedIn && (
        <Route path="/jokes/least" element={<LeastLikedJokes/>} />
        )}

        {authCtx.isLoggedIn && (
        <Route path="/view-comment/:id" element={<ViewComments/>}/>
        )}

        {authCtx.isLoggedIn && (
        <Route path="/enter-mail/:id" element={<SendJoke/>}/>
        )}



        <Route path="/message" element={<MessageMail/>}/>

        
        <Route path="/home" element={<MainNavigation/>}/>
           
{/*   
      //  <Route path="/auth" element={<AuthForm/>}/> */}

        <Route path="/signup" element={<Signup/>}/>

        {authCtx.isLoggedIn && (
        <Route path="/usermail" element={<SuccessMessage/>}/>
        )}

        {authCtx.isLoggedIn && (
        <Route path="/welcome" element={<Welcome/>}/>
        )}

        {!authCtx.isLoggedIn &&(
           <Route path="/login" element={<Kelvin/>}/>
        )}
       

        {authCtx.isLoggedIn && (
           <Route path="/user" element={<UserPage/>}/>
          )}

        <Route path="*" element={
        <Navigate to="/home" replace />}/>
  
        </Routes>
       
    </BrowserRouter>
    //</AuthContextProvider>
  
  );
}

export default App;
