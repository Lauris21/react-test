import { render } from "@testing-library/react";
import FirstComponent from "../src/FirstComponent";
import React from "react";
import { screen } from "@testing-library/react";

describe("Pruebas en <FirstComponent />", () => {
  const title = "Hola, soy tu padre";
  const subtitle = "Soy un subtitulo";

  // Hacemos una fotografía al componente
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<FirstComponent title={title} />);
    // Render aactualiza el objeto screem
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el mensaje 'Hola, soy tu padre'", () => {
    render(<FirstComponent title={title} />);
    expect(screen.getByText(title)).toBeTruthy(); // screen es el body
  });

  test("Debe mostrar el title en un h2", () => {
    render(<FirstComponent title={title} subtitle={subtitle} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      title
    );
  });

  test("Debe mostrar el subtítulo enviado por props", () => {
    render(<FirstComponent title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});
