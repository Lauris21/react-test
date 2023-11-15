import { TodoItem } from "./TodoItem";

export const TodoList = ({ todo, handleDeleteTodo }) => {
  return (
    <ul className="list-group p-2">
      {todo.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};
