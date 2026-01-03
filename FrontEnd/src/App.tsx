import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Body from './components/Body';
 
 
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Body />} />
      </Routes>
   
    </>
  );
}

export default App;
