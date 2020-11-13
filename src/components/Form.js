import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import schema from './Schema';
import * as yup from 'yup';
import HomePage from './HomePage';


const FormDiv = styled.div`
`

const Form = () => {
  const formObj = {
    name: '',
    size: 'large',
    ham: true,
    onion: true,
    jalapeno: true,
    specialInfo: ''
  }

  const errorObj = {
    name: '',
    size: '',
    ham: '',
    onion: '',
    jalapeno: '',
    specialInfo: ''
  }

  const [form, setForm] = useState(formObj);
  const [errors, setErrors] = useState(errorObj);
  const [user, setUser] = useState({ setForm });

  const submit = (event) => {
    event.preventDefault();

    const newUser = {
      name: form.name,
      size: form.size,
      ham: form.ham,
      onion: form.onion,
      jalapeno: form.jalapeno,
      specialInfo: form.specialInfo
    }
    axios.post('https://reqres.in/api/users', newUser)
      .then((response) => {
        setForm(formObj);
        setUser(newUser);
      })
      .catch((error) => {
        console.log('Something is not quite right', error);
      })
  }
  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: ' ' }))
      .catch((error) => setErrors({ ...errors, [name]: error.errors[0] }))
  }

  const changeHandler = (event) => {
    const { checked, value, name, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setForm({ ...form, [name]: valueToUse })
  }
  return (
    <>
      <HomePage>
        <div className='HeaderContainer'>
          <div className='Logo'>
            <h1>Lambda Eats</h1>
          </div>
          <div className='Navigation'>
            <Link to='/'>
              Home
            </Link>
            <Link to='Pizza'>Form</Link>
          </div>
        </div>
      </HomePage>

      <FormDiv>
        <form onSubmit={submit} >
          <div>
            <label>
              Name:
              <input onChange={changeHandler}
                value={form.value}
                type='text'
                name='name' />
            </label>
          </div>
          <div>
            <label>
              Pizza Size:
              <select onChange={changeHandler} value={form.size} name='size'>
                <option value='none'>Select Size</option>
                <option value='SM'>Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value='XL'>Extra Large</option>
              </select>
            </label>
          </div>
          <div>

            <label>Ham:
            <input onChange={changeHandler}
                value={form.value}
                type='checkbox'
                name='Ham' />
            </label>

            <label>
              Onion:
            <input onChange={changeHandler}
                value={form.value}
                type='checkbox'
                name='Onion' />
            </label>

            <label>
              Jalapeno:
            <input onChange={changeHandler}
                value={form.value}
                type='checkbox'
                name="Jalapeno" />
            </label>

            <label>
              Special Instruction:
              <input onChange={changeHandler}
                value={form.specialInfo}
                placeholder="any special request?"
                type='textarea'
                name='specialInfo' />
            </label>
          </div>
          <button name='button'>Place Order!</button>
          <div class='data-container'>
            <h2>{user.name}Order</h2>
            <p>Size: {user.size}</p>
            <p>Ham: {user.ham === true ? " " : 'skip'}</p>
            <p>Onion: {user.onion === true ? " " : 'skip'}</p>
            <p>Jalapeno: {user.jalapeno === true ? " " : 'skip'}</p>
            <p>Special Request: {user.specialInfo}</p>
          </div>
        </form>

      </FormDiv>
    </>
  )


}

export default Form;
