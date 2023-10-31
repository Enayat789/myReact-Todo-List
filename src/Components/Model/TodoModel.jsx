import React from "react";
import "./TodoModel.css";
import { useState } from "react";

function TodoModel() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  function closeTodoAdd() {
    document.getElementById("container-2").style.display = "none";
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload = { title, status };

  //   localStorage.setItem("credentials", JSON.stringify(payload));
  //   // localStorage.setItem("statusStore", JSON.stringify(status));
  // };
  function randomId() {
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }

  function onAddTask() {
    if (title === "" || status === "") {
      alert("Please fill the inputs");
    } else {
      alert("Item added successfully.");
      document.getElementById("container-2").style.display = "none";
    }

    const todos = [];

    const todo = {
      title: title,
      status: status,
      id: randomId(),
    };
    if (JSON.parse(localStorage.getItem("todos"))) {
      const previousTodos = JSON.parse(localStorage.getItem("todos"));
      previousTodos.push(todo);
      localStorage.setItem("todos", JSON.stringify(previousTodos));
    } else {
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    //
  }

  return (
    <div className="container-2" id="container-2">
      <button id="close-btn" onClick={closeTodoAdd}>
        X
      </button>
      {/* onSubmit={(e) => handleSubmit(e)} */}
      <form className="addTodoModel">
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
          <button
            id="taskAdd-btn"
            className={`${
              title === "" || status === ""
                ? `active_left_button`
                : `left_button`
            }`}
            onClick={onAddTask}
          >
            Add Task
          </button>

          <button id="taskCancel-btn" onClick={closeTodoAdd}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoModel;
