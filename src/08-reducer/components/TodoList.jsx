import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onDoneChange }) => {
    return (
        <ul className="list-group">



            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onDoneChange={onDoneChange}/>

            ))}

        </ul>
    )
}
