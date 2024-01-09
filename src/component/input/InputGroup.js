import React, { useState } from 'react'
import Input from './Input'
import ButonAdd from './ButonAdd'



const InputGroup = ({value, handleChange, handleAddTodo}) => {

  return (
    <div className=' container d-flex bg-light p-2 rounded-2 mt-5 '>
      
      <Input type='text'
      className="form-control me-2"
      placeholder="Ajouter une tache"
      value={value}
      onChange={handleChange}
     />
      <ButonAdd 
      type='submit'
      className='btn btn-success text-center rounded-3' 
       onClick={handleAddTodo}
      >Add</ButonAdd>
      <div>

      </div>
    </div>
  )
}

export default InputGroup
