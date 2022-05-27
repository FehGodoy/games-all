import React, {useState} from "react";
import Home from "./pages/Home"
import Global from "./styles/globalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderLeft from "./components/HeaderLeft";
import About from "./pages/About";
import SinglePage from "./pages/SinglePage";
import CategoryPlatforms from "./pages/CategoryPlatforms";
import Sidebar from "./components/Sidebar";


function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () =>{
      setIsOpen(!isOpen)
  }


  return (
  <>    
    <Router>
      <HeaderLeft />
      <Sidebar isOpen={isOpen} toggle={toggle} />      
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/about" element={<About />} />        
        <Route path="/single-game/:idUrl" element={<SinglePage />} />
        <Route path="/category/:idPlatform" element={<CategoryPlatforms />} />           
      </Routes>      
    </Router>
    <Global />
  </>
  );
}

export default App;
