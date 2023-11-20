import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en <TodoApp />", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Recoger gemas verdes",
        done: false,
      },
      {
        id: 2,
        description: "Recoger gemas blancas",
        done: false,
      },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 2,
  });
  test("Debe mostrar el componente correctamente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Recoger gemas verdes")).toBeTruthy();
    expect(screen.getByText("Recoger gemas blancas")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
