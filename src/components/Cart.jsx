import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import { FaPlusSquare, FaMinusSquare, FaTrash } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const handleToken=(token)=>{
    toast.success("You Payment done successfully")
  }
  return (
    <div className="container ">
            <h5 className="mt-4 " style={{marginLeft:"117px"}}>Shopping Cart</h5>
    <div className="container d-flex  mx-5">

    <div className="card mb-3 my-3 ms-5" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 ">
       
    
          {shoppingCart.length > 0 ? (
            shoppingCart.map((cart) => (
              <div className="d-flex my-2" key={cart.id}>
                <img
                  src={cart.image}
                  className="img-fluid rounded-start mx-3"
                  alt="not found"
                />

                <div className="col-md-12 ">
                  <div className="card-body  ">
                    <h6  style={{color:"rgb(57, 0, 100)" ,fontWeight:"bolder"}} className="card-title ">{cart.name}</h6>
                    <div className="d-flex mt-3">
                      <span style={{color:"chocolate"}} className="card-text me-2">
                         ${cart.price}.00
                      </span>
                      <span
                        className="card-text mx-2"
                        onClick={() =>
                          dispatch({ type: "INC", id: cart.id, cart })
                        }
                      >
                        <FaPlusSquare />
                      </span>
                      
                      
                      <span style={{color:"chocolate"}} className="card-text mx-2">{cart.qty}</span>
                      <span
                        className="card-text mx-2"
                        onClick={() =>
                          dispatch({ type: "DEC", id: cart.id, cart })
                        }
                      >
                        <FaMinusSquare />
                      </span>
                      
                      
                      <span
                        className="card-text mx-2"
                        onClick={() =>
                          dispatch({ type: "DELETE", id: cart.id, cart })
                        }
                      >
                        <FaTrash />
                      </span>
                    </div>
                    
                  </div>
                  <div style={{color:"rgb(57, 0, 100)" }} className="d-flex ms-2"><span  className="card-text mx-2">
                        Total Price
                      </span>
                    <span style={{color:"chocolate"}} className="card-text mx-2">
                        ${cart.price * cart.qty}.00
                      </span></div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="d-flex p-5" style={{color:"rgb(57, 0, 100)"}}>Empty</h3>
          )}
        </div>
      </div>
    </div>
    {shoppingCart.length>0 ? <div className=" summary mx-2" style={{width:"30%",height:"200px"}}>
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div style={{color:"rgb(57, 0, 100)"}}  className="col">Total Items</div>
                        <div style={{color:"chocolate"}} className="col">{qty}.00</div>
                        
                    </div>
                    <div className="row mt-2">
                    <div  style={{color:"rgb(57, 0, 100)"}} className="col ">Net Price </div>
                    <div style={{color:"chocolate"}} className="col  ">${totalPrice}.00 </div>
                    </div>
                    <div className="mt-3 ">
                    <StripeCheckout
                    stripeKey="pk_test_51LxAIaE2XUhLhvBqJO7GnRI6aMrPT5saIxcnZwhz1NMK9bb68VEneLWStn40kfrEhUKCbddyDAHp6GUWAJRvvQta00dTE3hgVt"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={totalPrice*100}
                    name="Payment"/></div>
                </div>:""}
                <ToastContainer
                position="bottom-center"
                theme="dark"/>
    </div>
    </div>
    // <div className='cart-container'>
    //   <div className='cart-details'>
    //     {shoppingCart.length>0? shoppingCart.map(cart=>(<div className='cart' key={cart.id}>
    //       <span className='cart-image'><img src={cart.image} alt="Not found" /></span>
    //       <span className='cart-product-name'>{cart.name}</span>
    //       <span className='cart-product-price'>{cart.price}</span>
    //       <span className='increment'><FaPlusSquare/></span>
    //       <span className='cart-product-qty'>{cart.qty}</span>
    //       <span className='decrement'><FaMinusSquare/></span>
    //       <span className='totalPrice'>{cart.totalPrice}</span>
    //       <span className='Remove'><FaTrash/></span>
    //     </div>)):'sorry your cart is currently empty'}
    //   </div>

    // </div>
  );
};

export default Cart;
