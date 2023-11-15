import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { AddTodo, TodoList } from "./components";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TODO APP : 5, <small>Pendientes: 3</small>
      </h1>
      <div className="row">
        <div className="col-7">
          <TodoList todo={todos} handleDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <AddTodo handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
