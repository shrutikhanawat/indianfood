
import { createContext, Fragment, useState, useReducer } from 'react';
export const AddContext = createContext({
    cart: [],
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
    };}
    return defaultCartState

}


export function ItemContext(props) {


    const [cartState, dipatchCartAction] = useReducer(cartReducer, defaultCartState)
    const [cartIsShown, setCartIsShown] = useState(false);

    const addItemHanlder = item => {
        dipatchCartAction({type :'ADD', item:item})
    };
    const removeItemHandler = id => {
        dipatchCartAction({type:'REMOVE', id:id})
    };
    const ctxData = {
        cart: [cartIsShown, setCartIsShown],
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHanlder,
        removeItem: removeItemHandler
    };

    return (
        <Fragment>
            <AddContext.Provider value={ctxData}>
                {props.children}
            </AddContext.Provider>

        </Fragment>
    )
}