import { useContext } from 'react';
import { AddContext } from '../../store/ItemsContext';
import './MealItem.css'
import MealItemForm from './MealItemForm';


const MealItem = (props) =>{
    const price =  `$ ${props.price.toFixed(2)}`;
    const ctxData = useContext(AddContext)

    const addToCartHandler = amount =>{
     ctxData.addItem({
         id:props.id,
         name:props.name,
         amount:amount,
         price:props.price
     });
    }
 return (
    <li className="meal">
     <div>
         <h3>{props.name}</h3>
         <div className="description">{props.description}</div>
         <div className="price">{price}</div>
     </div>
     <div>
     <MealItemForm  onAddToCart={addToCartHandler}/>
     </div>
 </li>
 )
}
export default MealItem;
