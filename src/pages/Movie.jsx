import { Link } from "react-router-dom";
import { useState } from "react";

export const movieData = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    views: 2000,
    rating: 8,
  },
  {
    id: 2,
    title: "Pulp Fiction",
    genre: "Crime",
    director: "Yashas",
    views: 8000,
    rating: 4,
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    director: "Christopher Nolan",
    views: 4000,
    rating: 10,
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    views: 4000,
    rating: 8,
  },
];
const Movie = () => {
  const [genreFilter, setGenreFilter] = useState("All");

  const filteredMovies =
    genreFilter === "All"
      ? movieData
      : movieData.filter((movie) => movie.genre === genreFilter);

  return (
    <div className="my-4 container">
      <h2>List of Movies</h2>
      <div className="mt-4">
        <label htmlFor="genreFilter">Filter By Genre:</label>
        <select
          id="genreFilter"
          onChange={(e) => setGenreFilter(e.target.value)}
          className="form-select"
        >
          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      <ul className="list-group mt-3">
        {filteredMovies.map((movie) => {
          return (
            <li key={movie.id} className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movie;
