import Hero from './components/Hero'
import Projects from './components/Projects'
import Header from './components/Header'

const App = () => {
  return (
    <div className='bg-gray-900 min-w-[300px] relative isolate px-6 pt-14 lg:px-8'>
      <Header />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
