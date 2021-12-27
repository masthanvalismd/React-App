import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const getMovies = () => {
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(getMovies);
  return movie ? <UpdateDetails movie={movie} /> : "";
}
function UpdateDetails({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };

    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"));
  };

  const history = useHistory();
  return (
    <div className="textField">
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a Name"
      />
      <TextField
        label="Enter Rating"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Rating"
      />
      <TextField
        label="Enter Poster Link"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Poster Link"
      />
      <TextField
        label="Enter Summary"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter Summary"
      />
      <TextField
        label="Enter Trailer"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Enter Trailer"
      />
      <div className="btn">
        <Button
          variant="outlined"
          style={{ backgroundColor: "black", color: "red" }}
          onClick={() => {
            editMovie();
          }}
        >
          Update Movie
        </Button>
      </div>
    </div>
  );
}
