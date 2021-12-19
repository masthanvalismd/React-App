import { useState } from "react";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const likes = () => {
    setLike(like + 1);
  };
  const disLikes = () => {
    setDisLike(dislike + 1);
  };
  return (
    <div className="counter-Container">
      <IconButton
        color="primary"
        onClick={likes}>
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon/>
        </Badge>
      </IconButton>

      <IconButton
        color="error"
        onClick={disLikes}>
        <Badge badgeContent={dislike} color="error">
        <ThumbDownIcon/>
        </Badge>
      </IconButton>
    </div>
  );
}
