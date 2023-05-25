

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Footer from './components/Footer'

function App() {


  return (
    <div className='bg-[#212121]'>
      <div className='max-w-7xl mx-auto'>

        <BrowserRouter>
          <Navbar />

        </BrowserRouter>
        <Hero/><Footer/>
      </div>
    </div>
  )
}

export default App
