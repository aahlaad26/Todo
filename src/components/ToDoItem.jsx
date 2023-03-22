import React, { useState } from "react";

function ToDoItem(props) {
  var [clicked, setClicked] = useState(false);
  var [but, setBut] = useState("Mark as done");
  function handleClick() {
    setClicked((prev) => {
      return !prev;
    });
    if (but === "Mark as done") {
      setBut("Unmark");
    } else {
      setBut("Mark as done");
    }
  }

  return (
    <div>
      <li>
        <p style={{ textDecoration: clicked ? "line-through" : "none" }}>
          {props.name}
        </p>
        <button onClick={handleClick}>{but}</button>
        <button
          onClick={() => {
            props.onCheck(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}
export default ToDoItem;
