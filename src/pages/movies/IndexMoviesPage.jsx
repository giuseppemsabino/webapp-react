import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function IndexMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Movie List</h1>

        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
