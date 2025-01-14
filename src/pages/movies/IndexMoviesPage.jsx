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
        <div className="row m-5">
          {movies.map((movie) => (
            <div key={movie.id} className="col-4 d-flex  mt-5">
              <div className="card">
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  
                  <Link to={"/movies/" + movie.id} className="btn btn-primary">
                    {movie.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
