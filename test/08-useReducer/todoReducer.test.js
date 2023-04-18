import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en el todoReducer.js", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe retornar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe agregar un todo", () => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);

    expect(newState).toContain(action.payload);
  });

  test("Debe  eliminar un todo", () => {
    const action = {
      type: "[TODO] REMOVE TODO",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("debe de realizar el toggle del todo", () => {
    const action = {
      type: "[TODO] TODO STATUS CHANGE",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);

    expect(newState2[0].done).toBe(false);
  });

  

});
