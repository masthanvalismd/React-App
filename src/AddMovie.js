import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";


export function AddMovie() {
  const [movieList, setMovieList] = useState([])
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const history = useHistory();
  return (
    <div className="textField">
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a Name" />
      <TextField
        label="Enter Rating"
        variant="standard"
        style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Rating" />
      <TextField
        label="Enter Poster Link"
        variant="standard"
        style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Poster Link" />
      <TextField
        label="Enter Summary"
        variant="standard"
        style={{ width: "100%", margin: "0px 8px", paddingLeft: "5px" }}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter Summary" />
      <div className="btn">
        <Button
          variant="outlined"
          style={{ backgroundColor: "black", color: "#FFFFFF" }}
          onClick={() => {
            const newMovie = {
              name,
              poster,
              rating,
              summary,
            };
            // console.log(newMovie);
            setMovieList([...movieList, newMovie]);
            setName("");
            history.push("/aboutMovies/add");
          }}
        >
          AddMovie
        </Button>

      </div>
    </div>
  );
}
