import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe("Pruuebas en <MultipleCustomHooks />", () => {
  test("Debe mostrar el componente correctamente", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getAllByText("Pokemon"));

    const nextButton = screen.getByRole("button");

    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un pokemon", () => {
    render(<MultipleCustomHooks />);
  });
});
