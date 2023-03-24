const { renderHook, act } = require("@testing-library/react")
const { useForm } = require("../../src/hooks/useForm")

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Ever',
        email: 'ever@google.com'
    };

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    })


    test('debe de cambiar el nombre en el formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        })

        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');
    })
})