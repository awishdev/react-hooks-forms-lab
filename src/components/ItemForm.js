import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItemForm , setNewItemForm] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce")
  
  
  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemForm,
      category: newItemCategory
    };
    onItemFormSubmit(newItem);
  }

  function handleInput(event){

    setNewItemForm(event.target.value);

  }

  function handleSelect(event){

    setNewItemCategory(event.target.value);

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInput}/>
      </label>

      <label>
        Category:
        <select onChange={handleSelect} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

