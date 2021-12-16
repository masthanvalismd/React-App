import { Movie } from "./Movie";
import Button from "@mui/material/Button";

export function MovieList({ movies, setMovieList }) {
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary }, index) => (
        <Movie
          deleteButton={
            <Button
              variant="outlined"
              className="deleteButton"
              style={{
                backgroundColor: "orange",
                color: "#FFFFFF",
              }}
              onClick={() => {
                // console.log("Deleting Movie..");
                const deleteIndex = index;
                const remainingMovies = movies.filter(
                  (mv, idx) => deleteIndex !== idx
                );
                // console.log(movies, remainingMovies);
                setMovieList(remainingMovies);
              }}
            >
              Delete
            </Button>
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
