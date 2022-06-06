
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { Login } from "./components/login";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const navigate=useNavigate();
  useEffect(()=>{
    navigate("/login")
  },[])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
