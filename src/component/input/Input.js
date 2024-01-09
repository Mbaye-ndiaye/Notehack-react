import React from 'react'

const Input = ({type, className, placeholder, value,onChange}) => {
  return <input 
  type={type} 
  className={className}
  placeholder={placeholder}
  value={value}
  onChange={onChange}

   />
}

export default Input
