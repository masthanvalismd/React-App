import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList() {
  const [movies, setMovieList] = useState([]);
  
  const getMovies = () => {
    fetch("https://61c55338c003e70017b7965d.mockapi.io/movies", {
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs));
  };
  useEffect(getMovies, []);
  
  const deleteMovie = (id) => {
    // // console.log("Deleting Movie..");
    // const deleteIndex = index;
    // const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
    // // console.log(movies, remainingMovies);
    // setMovieList(remainingMovies);
    
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => data.json())
    .then(() => getMovies());
  };
  
  
  const history = useHistory();
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary, id }, index) => (
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
          editButton={
            <IconButton
              color="warning"
              onClick={() => history.push(`/movie/edit/${id}`)}
              aria-label="delete"
              >
               <EditIcon /> 
            </IconButton>
          }
        //   <IconButton
        //   onClick={() => history.push(`/movie/edit/${id}`)}
        //   color="primary"
        //   aria-label="aboutMoviesEdit"
        // >
        //   <EditIcon />
        // </IconButton>
          id={id}
          poster={poster}
          name={name}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
