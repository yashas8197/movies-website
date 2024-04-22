import { movieData } from "./Movie";

const mostWatchedMovie = movieData.reduce((acc, curr) =>
  acc.views > curr.views ? acc : curr,
);

const highestRatedMovie = movieData.reduce((acc, curr) =>
  acc.rating > curr.rating ? acc : curr,
);

const totalMovies = movieData.length;

const Report = () => {
  return (
    <div className="container my-4">
      <h2>Report Page</h2>
      <hr />
      <h3>Most Watched Movie</h3>
      {mostWatchedMovie && (
        <>
          <p>Title: {mostWatchedMovie.title}</p>
          <p>Views: {mostWatchedMovie.views}</p>
        </>
      )}
      <h3>Highest Rated Movie</h3>
      {highestRatedMovie && (
        <>
          <p>Title: {highestRatedMovie.title}</p>
          <p>Views: {highestRatedMovie.rating}</p>
        </>
      )}
      <h3>Total Movies</h3>
      {totalMovies && <p>{totalMovies}</p>}
    </div>
  );
};

export default Report;
