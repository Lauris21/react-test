import { useForm } from "../../hooks/useForm";

export const AddTodo = ({ handleNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm({
    id: "",
    description: "",
    done: false,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What to do??"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        ADD
      </button>
    </form>
  );
};
