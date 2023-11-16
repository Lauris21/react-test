import { TodoItem } from "./TodoItem";

export const TodoList = ({ todo, handleDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group p-2">
      {todo.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          handleDeleteTodo={handleDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
