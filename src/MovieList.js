import { Movie } from "./Movie";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList({ movies, setMovieList }) {
  const deleteMovie = (index) => {
    // console.log("Deleting Movie..");
    const deleteIndex = index;
    const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
    // console.log(movies, remainingMovies);
    setMovieList(remainingMovies);
  };
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary }, index) => (
        <Movie
          deleteButton={
            <IconButton
              color="error"
              onClick={() => deleteMovie(index)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          poster={poster}
          name={name}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
