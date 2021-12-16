import { useState } from "react";
import Button from "@mui/material/Button";


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-Container">
      <Button
        variant="outlined"
        style={{ backgroundColor: "green", color: "#FFFFFF",padding:"2px" }}
        
        onClick={() => {
          setLike(like + 1);
        }}>
        👍{like}
      </Button>
      <Button
      variant="outlined"
      style={{ backgroundColor: "red", color: "#FFFFFF",padding:"2px" }}
        onClick={() => {
        setDisLike(dislike + 1);
      }}>
        👎{dislike}
      </Button>
    </div>
  );
}
