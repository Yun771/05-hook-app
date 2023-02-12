import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(1);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Conter: <Small value={counter} />
      </h1>
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
