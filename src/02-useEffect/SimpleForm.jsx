import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'correo@dominio.com'
  });


  const { username, email } = formState;

  const onInputChange = ({ target }) => {

    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value
    });

  };

  useEffect(() => {
    // console.log('useEffect Called');
  }, []);

  useEffect(() => {
    // console.log('formState Changed');
  }, [formState]);


  useEffect(() => {
    // console.log('email Changed');
  }, [email]);

  
  return (
    <>
      <h1>Formulario Simple</h1>
      <input
        type='text'
        name='username'
        className='form-control'
        placeholder='userName'
        value={username}
        onChange= { onInputChange }
      />

      {
        (username === 'strider2') && <Message />
      }

      

      <input
        type='email'
        name='email'
        className='form-control mt-2'
        placeholder='correo@dominio.com'
        value={email}
        onChange= { onInputChange }
      />
    </>
  );
};
