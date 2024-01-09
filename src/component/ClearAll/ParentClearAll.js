import React from 'react'
import Text from './Text'
import ClearAll from './ClearAll'

const ParentClearAll = ({handdleCleaAll}) => {
  
  return (
    <div className=' container bg-light mt-4 pt-2'>
        <div className='d-flex justify-content-between'>

      <Text className='f-3'>
        <p>Note<span className='m-3 zero mt-3 '>0</span></p>
        </Text>
        <ClearAll 
        className='btn btn-primary'
        onClick={handdleCleaAll}>ClearAll</ClearAll>
        </div>
        <hr/>
        <div className=' container mt-3'>
          <div className='row'>
            <div className='col-4 mt-2'>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ParentClearAll
