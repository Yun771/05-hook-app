import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef()

    console.log(inputRef);
 
    const onClick = () => {
        inputRef.current.select();
    };


  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
        ref={inputRef}
      />

      <button
        onClick={onClick}
        className='btn btn-primary mb-2'>
        Set Focus
      </button>
    </>
  );
};
