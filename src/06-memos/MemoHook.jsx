import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heaveStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heaveStuff(counter), [counter]);

  return (
    <>
      <h1>
        Conter: <small>{counter}</small>
      </h1>

      <h4> {memorizedValue} </h4>

      <hr />
      <button
        onClick={() => increment()}
        className='btn btn-primary'>
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className='btn btn-primary'>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
