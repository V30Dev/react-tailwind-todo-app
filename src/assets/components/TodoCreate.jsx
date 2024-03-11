import { useState } from "react"

const TodoCreate = ({ addTodo }) => {

    const [title, setTitle] = useState('')

    const handleSubmitTodo = (e) => {
        e.preventDefault()

        if (!title.trim()) {
            return setTitle('')
        }

        addTodo(title.trim())
        setTitle('')
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <form className="flex items-center gap-4 px-4 py-3 mb-8 overflow-hidden transition-all duration-700 bg-white rounded-md dark:bg-slate-800" onSubmit={handleSubmitTodo}>
            <span className="inline-block w-5 h-5 transition-all duration-700 border border-gray-300 rounded-full dark:border-gray-700"></span>
            <input className="flex-1 transition-all duration-700 outline-none dark:bg-slate-800 dark:text-gray-100" type="text" placeholder="Create a new todo..." value={title} onChange={handleTitle} />
        </form>
    )
}

export default TodoCreate