import React, { useState } from 'react'
import { toast } from "react-toastify";

const Form = ({addItem}) => {
    const [inputItem, setInputItem] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
       if(!inputItem) {
        toast.error("please provide value");
        return
    };
       addItem(inputItem);
       setInputItem("");
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
        <input type="text" className='form-input' value={inputItem} onChange={(e) => setInputItem(e.target.value)}/>
        <button type="submit" className='btn'>Add Item</button>
        </div>
    </form>
  )
}

export default Form