import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

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

  const onToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((item) => !item.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};
