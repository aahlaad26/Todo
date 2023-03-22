import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function hancleChange() {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  //adding elements
  function handleArray() {
    if (inputText !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hancleChange} type="text" value={inputText} />
        <button onClick={handleArray}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              name={todoItem}
              key={index}
              id={index}
              onCheck={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
