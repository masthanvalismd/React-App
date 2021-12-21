import { useState } from "react";
export function AddColor() {
  const[color,setColor]=useState("pink ")
  const styles = { background: color };
  const [colorList, setColorList] = useState(["#F4C430", "white", "green"]);
  return (
    <div className="color">
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a Color" />
      <button onClick={() => setColorList([...colorList, color])}>
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
