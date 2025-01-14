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
          // <button to={'/movies/' + movie.id}>{movie.title}</button>

          <div key={movie.id} className="card col-4 d-flex" >
            <img src={movie.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={"/movies/" + movie.id} className="btn btn-primary">
                {movie.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
