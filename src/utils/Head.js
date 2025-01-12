import { Link } from "react-router-dom"
import { logo } from "./Constants"
import useOnline from "./useOnline"


const Head = () => {


 const isOnline= useOnline()

  return ( 
    <div className="flex justify-between bg-lime-200 shadow-2xl">
      <img className=" h-24 w-24" alt="logo" src={logo} />
      <ul className=" flex items-center">
        <span>{isOnline? " hii🟢🟢":"🔴🔴"}</span>
        <span>{out}</span>
        <li className=" px-2 font-bold text-xl"><Link to="/">Home</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/about">About</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/contact">Contact</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/cart">Cart</Link></li>
        <li className=" px-2 font-bold text-xl"><a href="/login">Login</a></li>
      </ul>
       </div>
  )
}


export default Head



