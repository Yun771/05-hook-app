import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm, } = useForm({
        description: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1 ) return;

        onNewTodo({
            id: new Date().getTime(),
            description: description,
            done: false,
        });

        onResetForm();

    }


    return (
        <form onSubmit={onSubmit} className="d-grid gap-2">
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
