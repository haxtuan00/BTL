import React from 'react'
import './style.css'
const Input = ({typeInput,text}) => {
  return (
    <div className='input'>
      <label >{text}</label>
      <input type={typeInput}/>
    </div>
  )
}

export default Input