import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Laura",
    email: "Laura@gmail.com",
  };

  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre del formulario", () => {
    const target = { name: "name", value: "Lidi" };

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target });
    });

    expect(result.current.name).toBe(target.value);
    expect(result.current.formState.name).toBe(target.value);
  });

  test("Debe realizar el reset del formulario", () => {
    const target = { name: "name", value: "Lidi" };

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
