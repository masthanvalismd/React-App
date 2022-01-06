// import { useState } from "react";

import { useReducer } from "react";

import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";

const reducer = (state, action) => {
  switch (action.type) {
    case "likes":
      return { ...state, likes: state.likes + 1 };
    case "dislikes":
      return { ...state, dislikes: state.dislikes + 1 };

    default:
      return state;
  }
};

const initialState = { likes: 0, dislikes: 0 };
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-Container">
      <IconButton color="primary" onClick={() => dispatch({ type: "likes" })}>
        <Badge badgeContent={state.likes} color="primary">
          <ThumbUpIcon />
        </Badge>
      </IconButton>

      <IconButton color="error" onClick={() => dispatch({ type: "dislikes" })}>
        <Badge badgeContent={state.dislikes} color="error">
          <ThumbDownIcon />
        </Badge>
      </IconButton>
    </div>
  );
}

// import { useReducer } from "react";
// import "./styles.css";

// const reducer=(state,action)=>{
//   switch (action.type){
//     case "increment":
//       return {count:state.count + 1}
//       case "decrement":
//       return {count:state.count - 1}
//       case "reset":
//       return {count:action.payload}
//   }
// }

// const initialState={count:1}
// export default function App() {
//   return (
//     <div className="App">
//       <Counter/>
//     </div>
//   );
// }

// function Counter(){
//   const [state,dispatch]=useReducer(reducer,initialState)
//   return (
//     <div>
//       <h1>
//         Count:{state.count}
//       </h1>
//       <button onClick={()=>dispatch({type:"increment"})}><span>➕</span></button>
//       <button onClick={()=>dispatch({type:"reset" ,payload:10})}><span>🔃</span></button>
//       <button onClick={()=>dispatch({type:"decrement"})}><span>➖</span></button>
//     </div>
//   )
// }
// import { useState } from "react";
// // import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import Badge from "@mui/material/Badge";

// export function Counter() {
//   const [like, setLike] = useState(0);
//   const [dislike, setDisLike] = useState(0);
//   const likes = () => {
//     setLike(like + 1);
//   };
//   const disLikes = () => {
//     setDisLike(dislike + 1);
//   };
//   return (
//     <div className="counter-Container">
//       <IconButton
//         color="primary"
//         onClick={likes}>
//         <Badge badgeContent={like} color="primary">
//           <ThumbUpIcon/>
//         </Badge>
//       </IconButton>

//       <IconButton
//         color="error"
//         onClick={disLikes}>
//         <Badge badgeContent={dislike} color="error">
//         <ThumbDownIcon/>
//         </Badge>
//       </IconButton>
//     </div>
//   );
// }
