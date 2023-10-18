import React from "react";
import "./TodoModel.css";
import { useState } from "react";

function TodoModel() {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("Incomplete");

  function closeTodoAdd() {
    document.getElementById("container-2").style.display = "none";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ title, status });
    localStorage.setItem("titleStore", JSON.stringify(title));
    localStorage.setItem("statusStore", JSON.stringify(status));
  };

  return (
    <div className="container-2" id="container-2">
      <button id="close-btn" onClick={closeTodoAdd}>
        X
      </button>

      <form className="addTodoModel" onSubmit={(e) => handleSubmit(e)}>
        <h2>Add Todo</h2>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="type">
          Status
          <select
            name="type"
            id="type"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Completed</option>
          </select>
        </label>

        <div className="button-container">
          <button id="taskAdd-btn">Add Task</button>
          <button id="taskCancel-btn" onClick={closeTodoAdd}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoModel;
