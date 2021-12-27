import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";


export function AddMovie() {
  
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // // console.log(newMovie);
    // setMovieList([...movieList, newMovie]);
    // setName("");
    
    
    
    fetch("https://61c55338c003e70017b7965d.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((data) => data.json())
      .then(() =>  history.push("/movies"))
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
        placeholder="Enter a Name" />
      <TextField
        label="Enter Rating"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Rating" />
      <TextField
        label="Enter Poster Link"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Poster Link" />
      <TextField
        label="Enter Summary"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter Summary" />
      <TextField
        label="Enter Trailer"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Enter Trailer" />
      <div className="btn">
        <Button
          variant="outlined"
          style={{ backgroundColor: "black", color: "#FFFFFF" }}
          onClick={() => {addMovie() }}
        >
          AddMovie
        </Button>
   </div>
    </div>
  );
}
