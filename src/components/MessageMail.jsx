import React from 'react'
import {useNavigate} from "react-router-dom";

function MessageMail() {

    const navigate = useNavigate();

    const handleNext = () => {
      navigate("/user")
    }

  return (


    <div>
        <div>
        <h1 className="text-center"> Mail Sent, Kindly Check Your Mail</h1>
        </div>

        <br></br>
        <div class = "col-mid-12 text-center">
        <div>
        <button onClick={handleNext} className="btn btn-info"> Click to go back to Menu</button>
        </div>
        </div>
        
    </div>





  )
}
export default MessageMail;