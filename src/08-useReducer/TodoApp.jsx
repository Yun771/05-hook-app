import { useTodos } from '../hooks/';
import { TodoList, TodoAdd } from './';

export const TodoApp = () => {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleStatusTodoChange
  } = useTodos();


  return (
    <>
      <h1>
        Todo App: {todosCount},
        <small> Pendientes:{pendingTodosCount}
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleRemoveTodo} onDoneChange={handleStatusTodoChange} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
