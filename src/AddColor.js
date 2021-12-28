import { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "color":
      return { color: action.value };
    default:
  }
}
const initialState={color:"cyan"}
export function AddColor() {
  const[state,dispatch]=useReducer(reducer, initialState)
  const styles = { background: state.color };
  
  const [colorList, setColorList] = useState(["#F4C430", "whitesmoke", "green"]);
  return (
    <div className="color">
      <input
        onChange={(event) => dispatch({type: "color", value: event.target.value})}
        style={styles}
        placeholder="Enter a Color" />
      <button onClick={() => setColorList([...colorList, state.color])}>
        AddColor
      </button>
      {colorList.map((clr) => (
        <ColorBox clr={clr}/>
      ))}
    </div>
  );
}

function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "10px",
  };
  return <div style={styles}></div>
}


