import { AddTodo, TodoList } from "./components";
import { useTodos } from "../hooks/";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TODO APP : {todosCount} ,<small> Pendientes: {pendingTodosCount}</small>
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
