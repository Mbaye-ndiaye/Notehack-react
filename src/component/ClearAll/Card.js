import React from 'react'
import './Card.css'
import { MdDelete} from "react-icons/md";
import { FaPen } from "react-icons/fa";
const Card = ({table,  handleDelete, hanldeUpdate}) => {
  return (
      <div className='container'>
 <div className='row'>
   {table.map((index) => (
     <div className="col-md-4 mb-2 " key={index.id}>
       <div className="card  rounded-2 shadow" style={{borderLeftColor: 'blue'}}>
         <div className="card-body  ">
           <h5 className="card-title d-flex justify-content-between">{index.titre}
           <MdDelete onClick={handleDelete}/>
           <FaPen onClick={hanldeUpdate}/>
           </h5>
          
           <h6 className="card-date mb-2 text-muted">{index.date}</h6>
         </div>
       </div>
     </div>
   ))}
 </div>
</div>

   
  )
}

export default Card
