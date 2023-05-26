import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Partners from "./sections/Partners";
import Trust from "./sections/TrustMe";
import NewsLetter from "./sections/NewsLetter";
import WhatPeople from "./sections/WhatPeople";
import Stats from "./sections/Stats";
import Builder from "./sections/Builder";

function App() {
  return (
    <div className="bg-[#212121]">
      <div className="max-w-[87rem] mx-auto">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
      
      <div className="max-w-[87rem] mx-auto mt-[68px]">
        <Hero />
        <Stats/>
      </div>
      <Builder/>
      <Partners />
      <Trust/>
      <NewsLetter/>
      <WhatPeople/>
      <div className="max-w-[87rem] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
