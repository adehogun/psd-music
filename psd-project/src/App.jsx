import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SectionPart from './components/SectionPart'
import './App.css'
import Header from "./components/Header";
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <nav>
          <Header/>
        </nav>
        <header>

          <HeroSection/>

        </header>

        <section>
          <SectionPart/>
        </section>


    
      
      </div>
    
    </>
  )
}

export default App
