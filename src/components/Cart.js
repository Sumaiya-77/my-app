import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";

// Cart.jsx
const Cart = () => {
const cartItems =  useSelector(store=>store.Cart.items)
  return 
  <div>
    <Itemlist items={cartItems}/>
 </div>;
};

export default Cart;
