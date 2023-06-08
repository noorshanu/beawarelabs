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
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Index />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/*" element={<NotFound />} />
      </>,
    ),
  )

  return (
    <div className="bg-[#212121]">
        <Navbar />

      <RouterProvider router={router} />

      
    </div>
  )
}

export default App
