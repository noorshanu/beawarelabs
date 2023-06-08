import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Airdrop from './pages/Airdrop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-[#212121]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
