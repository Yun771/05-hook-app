import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar la piedra del alma',
    //   done: false,
    // },
];


const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodos = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos || []))
    }, [todos])


    const handleNewTodo = (todo) => {

        dispatchTodo({
            type: '[TODO] ADD TODO',
            payload: todo,
        });
    };


    const handleRemoveTodo = (id) => {
        dispatchTodo({
            type: '[TODO] REMOVE TODO',
            payload: id,
        });
    }

    const handleStatusTodoChange = (id) => {
        dispatchTodo({
            type: '[TODO] TODO STATUS CHANGE',
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleStatusTodoChange,
    }


};