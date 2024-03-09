import CrossIcon from "./assets/components/icons/CrossIcon"
import MoonIcon from "./assets/components/icons/MoonIcon"

const App = () => {

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-100">
      <header className="container px-4 py-8 mx-auto">
        <div className="flex justify-between pb-8">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-white uppercase">Todo</h1>
          <button>
            <MoonIcon/>
          </button>
        </div>
        
        <form className="flex items-center gap-4 px-4 py-2 overflow-hidden bg-white rounded-md">
          <span className="inline-block w-4 h-4 border border-gray-300 rounded-full"></span>
          <input className="flex-1 outline-none" type="text" placeholder="Create a new todo..."/>
        </form>
      </header>
      <main className="container px-4 pb-8 mx-auto">
        <div className="bg-white rounded-md">
          <article className="flex items-center justify-between gap-4 px-4 py-3 border-b">
            <button className="inline-block w-4 h-4 border border-gray-300 rounded-full"></button>
            <p className="flex-1">Complete course</p>
            <button>
              <CrossIcon/>
            </button>
          </article>
          <article className="flex items-center justify-between gap-4 px-4 py-3 border-b">
            <button className="inline-block w-4 h-4 border border-gray-300 rounded-full"></button>
            <p className="flex-1">Complete course</p>
            <button>
              <CrossIcon/>
            </button>
          </article>
          <article className="flex items-center justify-between gap-4 px-4 py-3 border-b">
            <button className="inline-block w-4 h-4 border border-gray-300 rounded-full"></button>
            <p className="flex-1">Complete course</p>
            <button>
              <CrossIcon/>
            </button>            
          </article>

          <section className="flex items-center justify-between gap-4 px-4 py-3 border-b">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>  
      </main>
      <section className="container px-4 mx-auto">
        <div className="flex justify-center gap-5 px-4 py-3 bg-white rounded-md">
          <button className="text-lg font-semibold text-blue-500">All</button>
          <button className="text-lg font-semibold text-gray-500 hover:text-blue-500">Active</button>
          <button className="text-lg font-semibold text-gray-500 hover:text-blue-500">Completed</button>
        </div>
      </section>
      <section className="mt-8 text-center">Drag n Drop to reorder list</section>       
    </div>
  )
}

export default App