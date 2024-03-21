import { useEffect, useState } from "react"
import { DragDropContext } from "@hello-pangea/dnd"

import TodoHeader from "./assets/components/TodoHeader"
import TodoCreate from "./assets/components/TodoCreate"
import TodoList from "./assets/components/TodoList"
import TodoComputed from "./assets/components/TodoComputed"
import TodoFilter from "./assets/components/TodoFilter"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  //CRUD
  const addTodo = (title) => {

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const todosLeft = todos.filter(todo => !todo.completed)

  const clearCompleted = () => {
    setTodos(todosLeft)
  }

  //Filter
  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const filtration = () => {
    if (filter === 'active') {
      return todosLeft
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    } else {
      return todos
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const listCopy = [...list]
    const [removed] = listCopy.splice(startIndex, 1);
    listCopy.splice(endIndex, 0, removed)
    return listCopy
  }

  const handleDragEnd = (result) => {

    const { source, destination } = result

    if (!destination) {
      return
    }
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return
    }

    setTodos((prevList) => reorder(prevList, source.index, destination.index))
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-100 dark:bg-slate-900 transition-all duration-700">
      <TodoHeader />

      <main className="container px-4 pb-8 mx-auto md:max-w-xl">
        <TodoCreate addTodo={addTodo} />
        <DragDropContext onDragEnd={handleDragEnd} >
          <TodoList todos={filtration()} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </DragDropContext>
        <TodoComputed todosLeft={todosLeft} clearCompleted={clearCompleted} />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center transition-all duration-700 dark:text-gray-400">Drag n Drop to reorder list</footer>
    </div>
  )
}

export default App