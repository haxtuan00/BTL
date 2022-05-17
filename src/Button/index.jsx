import React from 'react'
import './style.css'
const Button = ({text,colorButton,onClickButton}) => {
  return (
    <button className={`${colorButton === "violet" ? "violet" : "gray"} button`} onClick={onClickButton}>{text}</button >
  )
}

export default Button