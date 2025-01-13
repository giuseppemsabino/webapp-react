import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndexMoviesPage() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/4";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movie details</h1>

        {movie && <p>{movie.title}</p>}
      </div>
    </>
  );
}
