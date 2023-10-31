import "./TodoContent.css";
import TodoModel from "../Model/TodoModel";

function TodoApp() {
  function showTodoAdd() {
    document.getElementById("container-2").style.display = "flex";
  }

  return (
    <div className="container">
      <h1 className="title">TODO LIST</h1>
      <div className="main">
        <div className="content-1">
          <button type="button" id="addTaskBtn" onClick={showTodoAdd}>
            Add Task
          </button>
          <select id="selectOption">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Completed</option>
          </select>
          <TodoModel />
        </div>

        <div className="content-2">
          <p>No Todos</p>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
