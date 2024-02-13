
import { React, useState } from "react";
import {HEAD_URL} from '../utils/constants'
import { Link } from "react-router-dom";


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
            <Link to="/" ><li>Home</li></Link>
            <li><Link to="/about">About</Link></li>
            <Link to="/contact"><li>Contact us</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <button style={{margin:"10px"}} onClick={handleLogin}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
  