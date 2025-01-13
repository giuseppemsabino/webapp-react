import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export default function IndexMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const url = "http://localhost:3001/api/movies"

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        
        // setMovies(data)
    });
  },[]);

  return (
    <>
    <div className="container">
    <h1>Movie List</h1>

    {movies}
    </div>
    </>
  );
}
