import React from 'react'

const ButonAdd = ({children, type, onClick, className}) => {
  return<button type={type} 
  className={className} onClick={onClick}>{children}</button>
}

export default ButonAdd
