// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "../pages/Homepage";
import Aboutpage from "../pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>} path="/">
        <Route index element={<HomePage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
