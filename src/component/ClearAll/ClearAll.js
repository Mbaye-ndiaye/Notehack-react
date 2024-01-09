import React from 'react'

const ClearAll = ({type, className, onClick, children}) => {
  return <button type={type} 
  className={className} onClick={onClick}>{children}</button>
}

export default ClearAll
