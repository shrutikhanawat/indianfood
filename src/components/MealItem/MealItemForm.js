import React, { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { AddContext } from '../../store/ItemsContext';
import Input from '../../UI/Input';

import './MealItemForm.css'


const MealItemForm = (props) => {
  const { items } = useContext(AddContext)
  const HandleItemCount = (e) => {
    e.preventDefault();
    let item = items.itemCount + parseInt(e.target[0].value);
    items.setItemCount(item)
  }

  return (
    <Fragment>
      <form className='form' onSubmit={HandleItemCount}>
        <Input label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />

        <button>+ ADD</button>
      </form>
    </Fragment>
  )
}
export default MealItemForm;