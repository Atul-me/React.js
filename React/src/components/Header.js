import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btn, setBtn] = useState('Login');
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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