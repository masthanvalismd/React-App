export function GameBox({ val, onPlayerClick }) {
  // const val ="X" ;
  const styles = {
    color: val === "X" ? "cyan" : "yellow",
  };
  return (
    <div style={styles} onClick={() => onPlayerClick()} className="game-box">
      {val}
    </div>
  );
}
