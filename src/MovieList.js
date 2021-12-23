import { Movie } from "./Movie";
// import { useEffect } from "react"
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList({ movies, setMovieList }) {
  const deleteMovie = (id) => {
    // // console.log("Deleting Movie..");
    // const deleteIndex = index;
    // const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
    // // console.log(movies, remainingMovies);
    // setMovieList(remainingMovies);

    
      fetch(`https://61c412bff1af4a0017d99277.mockapi.io/movies/${id}`, {
        method: "DELETE",
      })
        .then((data) => {
          if (data.status !== 200) {
        return
          } else {
            setMovieList(movies.filter((movies) => {
              return movies.id !==id;
            }))
      }
    })
        // .then((data) => data.json())
      // .then((mvs)=>setMovieList(mvs))
    
  };
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary,id }, index) => (
        <Movie
          key={index}
          deleteButton={
            <IconButton
              color="error"
              onClick={() => deleteMovie(id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          id={index}
          poster={poster}
          name={name}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
