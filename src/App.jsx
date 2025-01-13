// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Aboutpage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";
import IndexMoviesPage from "./pages/movies/IndexMoviesPage";
import ShowMoviesPage from "./pages/movies/ShowMoviesPage";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* institutional pages  */}
        <Route element={<DefaultLayout/>} path="/">
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<Aboutpage/>}/>

        {/* movies pages */}
        <Route path="movies">
          <Route index element={<IndexMoviesPage/>}/>
          <Route path=":id" element={<ShowMoviesPage/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
