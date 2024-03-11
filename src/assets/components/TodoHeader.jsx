import { useEffect, useState } from "react"

import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"

const initialMode = localStorage.getItem('theme') === 'dark' ? true : false

const TodoHeader = () => {

    const [darkMode, setDarkMode] = useState(initialMode)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])


    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header className="container px-4 py-8 mx-auto md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold tracking-[0.3em] text-white uppercase">Todo</h1>
                <button onClick={toggleTheme}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    )
}

export default TodoHeader