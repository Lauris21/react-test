import { render } from "@testing-library/react";
import FirstComponent from "../src/FirstComponent";
import React from "react";

describe("Pruebas en <FirstComponent />", () => {
  // Hacemos una fotografía al componente
  //   test("debe hacer match con el snapshot", () => {
  //     const title = "Hola, soy tu padre";
  //     const { container } = render(<FirstComponent title={title} />);

  //     // Render aactualiza el objeto screem

  //     expect(container).toMatchSnapshot();
  //   });

  test("debe contener el title en un h2", () => {
    const title = "Hola, soy tu padre";
    const { container, getByText, getByTestId } = render(
      <FirstComponent title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toContain(title);

    // const h2 = container.querySelector("h2");

    // expect(h2.innerHTML).toBe(title);

    // expect(h2.innerHTML).toContain(title);
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy tu padre";
    const subtitle = "Soy un subtitulo";

    const { getByText } = render(
      <FirstComponent title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
