import React from 'react';
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/menu"}
        )
    }
  
    return (
        <div>
            <div>
                <h2>Welcome Joke Service</h2>
            </div>
            <div>
                <button onClick={handleNext}>click to continue</button>
            </div>
        </div>
    );
}

export default LandingPage;