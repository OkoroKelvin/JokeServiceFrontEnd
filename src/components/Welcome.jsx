import React from 'react';
import {useNavigate} from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/home")
      }

  return (
    <div>
    <div>
    <h1 className="text-center"> Welcome to Joke Services</h1>
    </div>

    <br></br>
    <div className = "col-mid-12 text-center">
    <div>
    <button onClick={handleNext} className="btn btn-info"> Click to go back to Menu</button>
    </div>
    </div>
    
</div>
  )
}
export default Welcome;
