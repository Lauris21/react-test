export const TodoItem = ({ item, handleDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          item.done ? "text-decoration-line-through" : ""
        }`}
        onDoubleClick={() => onToggleTodo(item.id)}
      >
        {item.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
