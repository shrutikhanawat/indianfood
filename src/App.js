import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import {  ItemContext } from './store/ItemsContext';

function App() {
 
   
  return (
    <ItemContext>
     <Cart/>
      <Header/>
      <Meals />
    </ItemContext>
  )
}

export default App;
