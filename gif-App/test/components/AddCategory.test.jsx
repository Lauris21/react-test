import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Ringo" } });

    expect(input.value).toBe("Ringo");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const initValue = "Cat";
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: initValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
  });
});
