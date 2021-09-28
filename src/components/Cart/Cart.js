import React , {Fragment, useContext}from "react";
import {AddContext } from "../../store/ItemsContext";
import Modal from "../../UI/Modal";
import './Cart.css';


const Cart = (props) => {
    const cartitems = <ul className='cart-items'>
        {[{id:'1', name:"paneer ",amount:2, price:20},].map((item)=><li>{item.name}</li>)}</ul>
   
  const {cart} =  useContext(AddContext)

 
 const HideCartHandler = ()=>{
    cart.setCartIsShown(false);
 }


       

    return (
        <Fragment>
       { cart.cartIsShown && <Modal>
        {cartitems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick= {HideCartHandler}>Close</button>
                <button className='button'>Order</button>
            </div>
    
        </Modal>
       }
</Fragment>
    );

}
export default Cart;