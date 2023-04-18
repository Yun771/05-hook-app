import { fireEvent, render, screen } from "@testing-library/react";
import { MultiCustomHooks } from "../../src/03-examles";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock("../../src/hooks/useFetch");

jest.mock('../../src/hooks/useCounter')


describe("Pruebas en <MultiCustomHooks />", () => {

  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter:1,
    increment: mockIncrement,

  });

  beforeEach( () => {
    jest.clearAllMocks();
  });


  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultiCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeTruthy();
  });

  test("debe de mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Ever",
          quote: "Hola mundo",
        },
      ],
      isLoading: false,
      hasError: null,
    });
    render(<MultiCustomHooks />);

    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Ever")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeFalsy();
  });
  
  test("debe de llamar la funcion de incrementar", () => {
   
    useFetch.mockReturnValue({
      data: [
        {
          author: "Ever",
          quote: "Hola mundo",
        },
      ],
      isLoading: false,
      hasError: null,
    });


    render( <MultiCustomHooks /> )

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
    
  });
});
