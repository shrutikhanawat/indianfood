import React,{useContext} from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AddContext} from '../../store/ItemsContext';
import './HeaderCartButton.css';


const HeaderCartButton = (props) => {
    const {items,cart} = useContext(AddContext)

    const showCartHandler = ()=>{
        cart.setCartIsShown(true)
    }

    return(
    <div>
        <button className="button" onClick={showCartHandler}>
            <span className="icon"><FiShoppingCart /></span>
            <span> Your Cart</span>
            <span className="badge">{items.itemCount}</span>
        </button>
    </div>
    )
}
export default HeaderCartButton;