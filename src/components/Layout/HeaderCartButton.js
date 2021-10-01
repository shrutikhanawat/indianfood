import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AddContext } from '../../store/ItemsContext';
import './HeaderCartButton.css';


const HeaderCartButton = (props) => {
    const ctxData = useContext(AddContext)

    const showCartHandler = () => {
        ctxData.cart[1](true)
    }
    const numberOfCartItems = ctxData.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <div>
            <button className="button" onClick={showCartHandler}>
                <span className="icon"><FiShoppingCart /></span>
                <span> Your Cart</span>
                <span className="badge">{numberOfCartItems}</span>
            </button>
        </div>
    )
}
export default HeaderCartButton;