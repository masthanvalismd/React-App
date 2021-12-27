import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function UpdateDetails() {
  // const [movies, setMovieList] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const [userId, setUserId] = useState("");
  // const { id } = useParams();
  useEffect(() => {
    getMovies();
  }, []);
  function getMovies() {
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies`).then((data) => {
      data.json().then((movie) => {
        // console.warn(resp)
        setName(movie[0].name);
        setRating(movie[0].rating);
        setPoster(movie[0].poster);
        setSummary(movie[0].summary);
        setTrailer(movie[0].trailer);
        setUserId(movie[0].id);
      });
    });
  }

  function updateUser() {
    let item = { name, rating, poster, summary, trailer, userId };
    console.warn("item", item);
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((data) => {
      data.json()
        .then(() => history.push("/aboutMovies/add"));
    });
  }
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
          style={{ backgroundColor: "black", color: "#FFFFFF" }}
          onClick={() => {
            updateUser();
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

