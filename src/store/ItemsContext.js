
import { createContext, Fragment, useState } from 'react';
export const AddContext = createContext();



export function ItemContext(props) {
    const [itemCount, setItemCount] = useState(0);
    const [cartIsShown, setCartIsShown] = useState(false);
    const ctxData = {
        items: {itemCount, setItemCount},
        cart: {cartIsShown, setCartIsShown}
    }

    return (
        <Fragment>
            <AddContext.Provider value={ctxData}>
                {props.children}
            </AddContext.Provider>

        </Fragment>
    )
}