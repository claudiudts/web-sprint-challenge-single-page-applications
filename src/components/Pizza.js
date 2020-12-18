import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Pizza =(props) => {
  let history = useHistory()
   const [form, setForm] = useState({
    name: '',
    sauce: '',
    amount: '',
  });

  const handleCheckbox = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  };

  const handleForm = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
  };

  return (
    <div>
      <h2>Build your mean pizza</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(form)
        props.setPlaceOrder(form)
        history.push('/confirmation')
      }}>
        <input required onChange={handleForm} value={form.name}
        type='text'
        name='name'
        placeholder='Name'
        min={3} />
        <h3>Size of Pizza</h3>
        <p>Need to select a size</p>
        <select required name='size' placeholder='Select Size' onChange={handleForm}>
          <option value='small'>Personal Pizza</option>
          <option value='medium'>For children</option>
          <option value='large'>Family of 4</option>
          <option value='x-large'>Body Builders</option>
        </select>
        <h3>Sauce</h3>
        <input onChange={handleForm}
        type='radio'
        name='sauce'
        value='red'
        id='red-sauce'
        checked={form.sauce==='red'} />
        <label htmlFor='red-sauce'>Red Sauce</label>
        <input onChange={handleForm}
        type='radio'
        name='sauce'
        value='white'
        id='white-sauce'
        checked={form.sauce==='white'} />
        <label htmlFor='white-sauce'>White Sauce</label>
        <input onChange={handleForm}
        type='radio'
        name='sauce'
        value='mystery'
        id='white-sauce'
        checked={form.sauce==='mystery'} />
        <label htmlFor='mystery-sauce'>Mystery Sauce</label>
        <h3>Toppings!</h3>
        <input onChange={handleCheckbox}
        type='checkbox'
        name='ham'
        value='ham'
        checked={form.ham===true} />
        <label htmlFor='ham'>Ham</label>
        <input onChange={handleCheckbox}
        type='checkbox'
        name='pepperoni'
        value='pepperoni'
        checked={form.pepperoni===true} />
        <label htmlFor='pepperoni'>Pepperoni</label>
        <input onChange={handleCheckbox}
        type='checkbox'
        name='onions'
        value='onions'
        checked={form.onions===true} />
        <label htmlFor='onions'>Onions</label><input onChange={handleCheckbox}
        type='checkbox'
        name='jalapenos'
        value='jalapenos'
        checked={form.jalapenos===true} />
        <label htmlFor='jalapenos'>Jalapenos</label>
        <input onChange={handleCheckbox}
        type='checkbox'
        name='pineapple'
        value='pineapple'
        checked={form.pineapple===true} />
        <label htmlFor='pineapple'>Pineapple</label>
        <h3>How many?</h3>
        <input onChange={handleForm}
        type='number'
        name='amount'
        min={1}
        value={form.amount} />
        <h3>Anything Else?</h3>
        <input onChange={handleForm}
        type='text'
        name='instructions'
        placeholder='Anything Else?' />
        <button> Place Order</button>
      </form>
    </div>
  )
};
export default Pizza;