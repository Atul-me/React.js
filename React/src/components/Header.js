import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux";
const Header = () => {
  const [btn, setBtn] = useState('Login');
  const OnlineStatus = useOnlinestatus();
  const {loggedUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items) ;
  
    return (
      <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500] shadow-md">
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
            <li className="px-4 hover:text-green-500 duration-[.3s]">
            <Link to="/cart">
              🛒 (
              {cartItems.length === 1
                ? `${cartItems.length} item`
                : `${cartItems.length} items`}
              )
            </Link>
          </li>
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