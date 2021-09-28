import { Fragment } from 'react';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
    <header className= "header">
        <h1>IndianMeals</h1>
        <HeaderCartButton onClick = {props.onClick}/>
    </header>
    <div className="main-image">
        <img src="displayimage.png" alt="A table of full of delicious food"/>

        </div>

</Fragment >
}
export default Header;