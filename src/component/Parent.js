import React, {useState} from "react";
import Header from "../Header";
import InputGroup from "./input/InputGroup";
import ParentClearAll from "./ClearAll/ParentClearAll";
import Card from './ClearAll/Card'


const Parent = () => {
  const [value, setValue] = useState('')
  const [table, setTable] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value)  
  }

 const handleAddTodo = () => {
    const newTach = {
      id:  Math.floor(Math.random() * 1000000),
      titre: value,
      date: new Date().toLocaleString(),
    }    
    setTable((prev) => [...prev, newTach])
    console.log(table);
    setValue('')
  }
  const handleDelete = (userId) => {
    const deletUser = table.filter(index => index.id !== userId)
    setTable(deletUser)
    console.log(deletUser);

  }

  const hanldeUpdate = (id) => {
    const updateUtilisateur = table.find(todo => todo.id === id)
setTable({table: updateUtilisateur})
}
  
  const handdleClearAll = () => {
    setTable([])
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <InputGroup value={value} handleChange={handleChange} handleAddTodo={handleAddTodo}/>
      </div>
      <ParentClearAll  handdleCleaAll={handdleClearAll} handleDelete={handleDelete} hanldeUpdate={hanldeUpdate}/>
     <Card table={table}/>

    </div>
  );
};

export default Parent;
