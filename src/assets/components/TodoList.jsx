import { Droppable, Draggable } from "@hello-pangea/dnd"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(dropProvided) => (
                <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} className="transition-all duration-700 bg-white dark:bg-slate-800 rounded-t-md">
                    {todos.map((todo, index) => (
                        <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                            {(dragProvided) => (
                                <TodoItem ref={dragProvided.innerRef} {...dragProvided.draggableProps} {...dragProvided.dragHandleProps} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                            )}
                        </Draggable>
                    ))}
                    {dropProvided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default TodoList