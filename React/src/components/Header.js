import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';

const Header = () => {
  const [btn, setBtn] = useState('Login');
  const OnlineStatus = useOnlinestatus();

  
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-links">
          <ul className="ul">
            <li>OnlineStatus: {OnlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button onClick={() => {
            btn === 'Login' ? setBtn('Logout') : setBtn('Login')
            }}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;