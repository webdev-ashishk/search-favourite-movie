import { useGlobalContext } from "./Context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <div>Movies</div>
      {movie.map((currentMovie) => {
        return (
          <>
            <div>
              <h3>{currentMovie.Title}</h3>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Movies;
