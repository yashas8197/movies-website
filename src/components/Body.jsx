import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="container my-5">
      <img
        src="https://placehold.co/600x400?text=Movies+Cover"
        className="img-fluid"
      />
      <section className="my-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Our Movies</h2>
            <p>
              Explore our collection of movies spanning various genres and
              themes.
            </p>
            <Link to="/movies" className="btn btn-primary">
              View Movies
            </Link>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Movies Report</h2>
            <p>
              Check out our curated report on movies.
            </p>
            <Link to="/report" className="btn btn-primary">
              View Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
