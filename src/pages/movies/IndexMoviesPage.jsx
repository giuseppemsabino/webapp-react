import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.movies);

        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.pinimg.com/1200x/0b/36/63/0b36632ceffe66aaa1e704347a6311be.jpg" className="d-block w-100" alt="..." />
              
            </div>
            <div className="carousel-item">
              <img src="https://th-thumbnailer.cdn-si-edu.com/PQXRUGQnbG8E6eJ5lE2OwwNi6hk=/fit-in/1200x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2FThe-Godfather-Effect-Don-Vito-631.jpg" className="d-block w-100 h-500" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://tgtrs.wordpress.com/wp-content/uploads/2021/09/unnamed-1.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
