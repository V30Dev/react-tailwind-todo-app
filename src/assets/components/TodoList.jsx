import TodoItem from "./TodoItem"

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
    return (
        <div className="transition-all duration-700 bg-white dark:bg-slate-800 rounded-t-md">
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)}
        </div>
    )
}

export default TodoList