import React, { Fragment, useContext } from "react";
import { AddContext } from "../../store/ItemsContext";
import Modal from "../../UI/Modal";
import './Cart.css';


const Cart = (props) => {
    const  ctxData = useContext(AddContext)
    const totalAmount = `$${ctxData.totalAmount.toFixed(2)}`;
    const HasItems = ctxData.items.length>0;
     const cartitems = <ul className="cartitems">
      {ctxData.items.map((item) => <li>
        {item.name}
      </li>)}</ul>



    const HideCartHandler = () => {
        ctxData.cart[1](false);
    }




    return (
        <Fragment>
            {ctxData.cart[0] && <Modal>
                {cartitems}
                <div className='total'>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className='actions'>
                    <button className="closebutton" onClick={HideCartHandler}>Close</button>
                   { HasItems && <button className='button'>Order</button>}
                </div>

            </Modal>
            }
        </Fragment>
    );

}
export default Cart;