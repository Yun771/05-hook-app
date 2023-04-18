

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] ADD TODO':

            return [action.payload, ...state];

        case '[TODO] REMOVE TODO':
            return state.filter((todo) => todo.id !== action.payload);

        case '[TODO] TODO STATUS CHANGE':

            return state.map((todo) => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            });

        default:
            return state;
    }

}