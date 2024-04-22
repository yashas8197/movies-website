import { useParams } from "react-router-dom";
import { movieData } from "./Movie";

const MovieDetails = () => {
  const { movieId } = useParams();

  const movie = movieData.find((data) => data.id === parseInt(movieId));
  
  return (
    <div className="container my-5">
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Title: </strong>
              {movie.title}
            </li>
            <li className="list-group-item">
              <strong>Genre: </strong>
              {movie.genre}
            </li>
            <li className="list-group-item">
              <strong>Director: </strong>
              {movie.director}
            </li>
          </ul>
        </>
      ) : (
        <p className="alert alert-danger">Movie Not Found</p>
      )}
    </div>
  );
};

export default MovieDetails;
