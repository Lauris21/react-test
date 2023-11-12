import { render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("Pruebas en <GifApp />", () => {
  test("Debería...", () => {
    const { container } = render(<GifApp />);

    expect(container).toMatchSnapshot();
  });
});
