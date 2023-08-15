import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currentMovie) => {
            const { imdbID, Poster, Title, Year } = currentMovie;
            return (
              <>
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="cart">
                    <div className="cart-info">
                      <h2>{Title}</h2>
                      <img src={Poster} alt={imdbID} />
                      <h5>Year:{Year}</h5>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
