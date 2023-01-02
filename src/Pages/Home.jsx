import React from "react";
import { Link } from "react-router-dom";
import '../Pages/Home.css'

function Home(){
    return(
        <div>
            <h1 className="welcome">Welcome to Eventim!</h1>
            <Link className="clicktoenter" to='/EventForm'>Click to Enter</Link>
        </div>
    )
}

export default Home