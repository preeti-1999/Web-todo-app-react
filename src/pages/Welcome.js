import React from 'react';
import {Link} from "react-router-dom";
import './Welcome.css';

function Welcome() {
    return (
        <div>
            <h1  className="line5" style={{color:"white"}}>WELCOME TO TODO APPLICATION </h1>
            <img src="/images/womentodo.jpg" />
            <div>
                    <h2 className="line1" style={{color:"black"}}>This is a Todo  Application made using React and Material UI  </h2>
                    <p className="line2" style={{color:"black"}}>It has basic properties like <b>INSERTION,DELETION and UPDATION.</b> </p>
                    <p  className="line3" style={{color:"black"}}>The user has to first login using username and password to access the todo application</p>
                    <h3 className="line4" style={{color:"white"}}>Click below to enter the Login Page</h3>
                    
                </div>
            <Link to="/register">
               
                <div >
                    <h1 style={{color:"white"}}>Login</h1>
                </div>
            </Link>
        </div>
    );
}

export default Welcome
