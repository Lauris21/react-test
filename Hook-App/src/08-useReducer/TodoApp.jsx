import { useEffect } from "react";
import { AddTodo, TodoList } from "./components";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        TODO APP : 5, <small>Pendientes: 3</small>
      </h1>
      <div className="row">
        <div className="col-7">
          <TodoList
            todo={todos}
            handleDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <AddTodo handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
