import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Airdrop from './pages/Airdrop'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Index />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </>,
    ),
  )

  return (
    <div className="bg-[#3e3e3e]">
      <div className="max-w-[100rem] mx-auto">
        <Navbar />
      </div>

      <RouterProvider router={router} />

      
    </div>
  )
}

export default App
