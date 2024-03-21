const TodoComputed = ({ todosLeft, clearCompleted }) => {
    return (
        <section className={`
            flex items-center justify-between 
            gap-4 px-4 py-3 mb-8 
            transition-all duration-700 
            bg-white dark:bg-slate-800 
            rounded-b-md ${todosLeft.length === 0 && 'rounded-t-md'}`}>
            <span className="text-gray-400">{todosLeft.length} items left</span>
            <button className="text-gray-400" onClick={clearCompleted} >Clear Completed</button>
        </section>
    )
}

export default TodoComputed