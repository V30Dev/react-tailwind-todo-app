import React from "react"
import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck"


const TodoItem = React.forwardRef(({ todo, completeTodo, deleteTodo, ...props }, ref) => {

    const { id, title, completed } = todo

    const handleComplete = () => {
        completeTodo(id)
    }

    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <article ref={ref} {...props} className="flex items-center justify-between gap-4 px-4 py-3 transition-all duration-700 border-b dark:border-b-gray-700">
            <button className="inline-block w-5 h-5 transition-all duration-700 border border-gray-300 rounded-full dark:border-gray-700" onClick={handleComplete}>
                {completed && <IconCheck />}
            </button>
            <p className={`flex-1 transition-all duration-700 ${completed ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-800 dark:text-gray-100'}`}>
                {title}
            </p>
            <button onClick={handleDelete}>
                <IconCross />
            </button>
        </article>
    )
})

export default TodoItem