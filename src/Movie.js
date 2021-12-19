import { useState } from "react";
import { Counter } from "./Counter";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {AddMovie} from "./AddMovie";

export function Movie({ poster, name, rating, summary, deleteButton }) {
  const styles = {
    color: rating >= 8.5 ? "green" : "crimson",
  };
  const [show, setShow] = useState(true);
  // const descriptionStyles={display:show?"block":"none"}
  return (
    <div className="movie-container">
      <img className="pic" src={poster} alt="img" />
      <Counter />
      <div className="delBtn">{deleteButton}</div>
      <div className="det">

        <h2>{name}</h2>
      <IconButton
        onClick={() => setShow(!show)}
        
      >
        {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
     </IconButton>
        <p style={styles} className="rating">
          {rating}⭐
        </p>
      </div>
      {/* <p style={ descriptionStyles} className="movie-summary">{summary}</p> */}
      {show ? <p className="movie-summary">{summary}</p> : ""}
    </div>
  );
}
