import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';
import UserContext from "../utils/useContext";

const Header = () => {
  const [btn, setBtn] = useState('Login');
  const OnlineStatus = useOnlinestatus();
  const {loggedUser} = useContext(UserContext);

  
    return (
      <div className="flex justify-between bg-slate-100">
        <div className="w-24">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="">
          <ul className="flex mt-8 space-x-4 mr-4 text-lg">
            <li className="">OnlineStatus: {OnlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="bg-green-300 px-1 py-1" onClick={() => {
            btn === 'Login' ? setBtn('Logout') : setBtn('Login')
            }}>{btn}</button>
            <li>{loggedUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;