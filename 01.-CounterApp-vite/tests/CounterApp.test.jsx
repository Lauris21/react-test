import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const value = 100;
  const initialValue = 3;

  test("Debe hacer match con snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de value en 100", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value.toString()
    );
  });

  test("Debe incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+ 1"));

    expect(screen.getByText("4")).toBeTruthy();
  });

  test("Debe decrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("- 1"));

    expect(screen.getByText("2")).toBeTruthy();
  });

  test("Debe resetear con el botón reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
