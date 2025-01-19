import { Link } from "react-router-dom";
import { logo } from "../utils/Constants";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import Hra from "../utils/Hra";
import { useSelector } from "react-redux";

const Head = () => {
  const isOnline = useOnline();
  const { out } = useContext(Hra);


  const cartItems = useSelector(store => store.Cart?.items || []);
  // const cartItems = useSelector(store=>store.cart.items)

  return (
    <div className="flex justify-between bg-green-300 shadow-2xl">
      <img className="h-24 w-25" alt="logo" src={logo} />
      <ul className="flex items-center">
        <span>{isOnline ? "🟢🟢" : "⭕⭕"}</span>
        <span>{out}</span>
        <li className="px-2 font-bold text-x1">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 font-bold text-x1">
          <Link to="/About">About</Link>
        </li>
        <li className="px-2 font-bold text-x1">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="px-2 font-bold text-x1">
          <Link to="/Cart">Cart-{cartItems.length}</Link>
        </li>
        <li className="px-2 font-bold text-x1">
          <a href="Login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Head;
