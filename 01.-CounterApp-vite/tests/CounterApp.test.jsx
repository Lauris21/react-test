import React from "react";
import { screen, render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const value = 100;

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
});
