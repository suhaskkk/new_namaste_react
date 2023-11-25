
import { React, useState, useEffect } from "react";
import {HEAD_URL} from '../utils/constants'


const Header = () => {
  const[btnName,setBtnName] = useState("login")
  

  const handleLogin = () =>{
    setBtnName((prev)=>(prev==="login"?"logout":"login"))
  }
  
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="log"
            src={HEAD_URL}
            alt="food logo"
            //   style={{width:'70px'}}
          />
        </div>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button style={{margin:"10px"}} onClick={handleLogin}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
  