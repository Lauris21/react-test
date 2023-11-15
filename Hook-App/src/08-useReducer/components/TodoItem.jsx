export const TodoItem = ({ item, handleDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{item.description}</span>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
