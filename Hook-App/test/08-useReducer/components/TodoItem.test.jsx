import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Recoger gemas verdes",
    done: false,
  };

  const handleDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        item={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("Debe mostrar el Todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        item={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Debe llamar al onToggleTodo cuando se hace doble click", () => {
    render(
      <TodoItem
        item={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.doubleClick(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("Debe llamar al handleDelete cuando se hace click en el boton", () => {
    render(
      <TodoItem
        item={todo}
        handleDeleteTodo={handleDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
