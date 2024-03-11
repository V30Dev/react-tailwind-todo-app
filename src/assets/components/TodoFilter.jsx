const TodoFilter = ({ changeFilter, filter }) => {

    return (
        <section className="container mx-auto">
            <div className="flex justify-center gap-5 px-4 py-3 transition-all duration-700 bg-white rounded-md dark:bg-slate-800">
                <button
                    className={`text-lg font-semibold ${filter === 'all' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'} `}
                    onClick={() => changeFilter('all')}>
                    All
                </button>
                <button
                    className={`text-lg font-semibold ${filter === 'active' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'} `}
                    onClick={() => changeFilter('active')}>
                    Active
                </button>
                <button
                    className={`text-lg font-semibold ${filter === 'completed' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'} `}
                    onClick={() => changeFilter('completed')}>
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TodoFilter