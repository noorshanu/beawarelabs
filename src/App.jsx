import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Partners from "./sections/Partners";

function App() {
  return (
    <div className="bg-[#212121]">
      <div className="max-w-[1440px] mx-auto">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Hero />
      </div>
      <Partners />
      <div className="max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
