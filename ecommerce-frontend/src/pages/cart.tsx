import { useEffect, useState } from "react";

import {VscError} from "react-icons/vsc"
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems=[
  {
  productId:"assssdx",
 photo:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
  name:"Macbook",
  price:3000,
  quantity:4,
  stock:10,
  },

];
const subtotal =4000;
const tax=Math.round(subtotal*0.18);
const shippingCharges=200;
const discount=400;
const total=subtotal+tax+shippingCharges;



const Cart = () => {

  const [couponCode,setCouponCode]=useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);

    useEffect(()=>{
      const timeOutID=setTimeout(()=>{
        if(Math.random()>0.5)setIsValidCouponCode(true);
        else setIsValidCouponCode(false);
      },1000);
      return()=>{
          clearTimeout(timeOutID);
          setIsValidCouponCode(false);
      };
    },[couponCode])
  

  return (
    <div  className="cart">
      <main>
    {
        cartItems.length >0 ?cartItems.map((i,idx)=>(
          <CartItem key={idx} cartItem={i} />
        )):<h1>No Item Added</h1>
    }

      </main>

      <aside>
    <p>Subtotal: ₹{subtotal}</p>
    <p>Shipping Charges: ₹{shippingCharges}</p>
    <p>Tax: ₹{tax}</p>
    <p>
      Discount: <em className="red" > - ₹{discount}</em>
    </p>
    <p>
      <b>Total:₹{total}</b>
    </p>
    <input type="text" value={couponCode} placeholder="Coupon Code" onChange={(e)=> setCouponCode(e.target.value)}   />
    { couponCode &&(
       isValidCouponCode ?(
        <span className="green">
          ₹{discount}off using the <code>{couponCode}</code>
        </span>
      ):(<span className="red" >Invalid Coupan <VscError/></span>)
    )}

    {
      cartItems.length >0 && <Link to='/shipping' >Checkout</Link>
    }
      </aside>

    </div>
  )
}

export default Cart;