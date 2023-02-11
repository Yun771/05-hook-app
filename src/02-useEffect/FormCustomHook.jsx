import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

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
      <h1>Formulario con custom Hook</h1>
      <input
        type='text'
        name='username'
        className='form-control'
        placeholder='userName'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        name='email'
        className='form-control mt-2'
        placeholder='correo@dominio.com'
        value={email}
        onChange={onInputChange}
      />

      <input
        type='password'
        name='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        value={password}
        onChange={onInputChange}
      />

      <button
        onClick={onResetForm}
        className='btn btn-primary mt-2'>
        Borrar
      </button>
    </>
  );
};
