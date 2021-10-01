import React, {useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Input from '../../UI/Input';

import './MealItemForm.css'


const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5)
    {
      return;
    }
    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <Fragment>
      <form className='form' onSubmit={submitHandler}>
        <Input
        ref ={amountInputRef}
        label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}/>

        <button>+ ADD</button>
      </form>
    </Fragment>
  )
}
export default MealItemForm;