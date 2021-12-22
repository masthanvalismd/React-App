import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Button from "@mui/material/Button";
import Confetti from "react-confetti";
import { GameBox } from "./GameBox";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // x starts the game - hence isXTurn true
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    console.log("Clicked", index);
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // if all three are equal or null
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const status = "Next player is " + (isXTurn ? "X" : "O");

  return (
    <div className="game">
      {winner ? <Confetti width={width} height={height} gravity={0.03} /> : " "}
      <div className="status">{status}</div>
      <div className="board">
        {/* based whose turn we have to pass val down */}
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? (
        <h2 className="winner-text">
          The Winner Is "<span className="winner-">{winner}</span>"
        </h2>
      ) : (
        " "
      )}
      {winner ? (
        <Button 
          color="error"
          variant="outlined"
          onClick={() => {
            setBoard([null, null, null, null, null, null, null, null, null]);
            setIsXTurn(true);
          }}
          startIcon={< RestartAltIcon />}
        >
          Restart
        </Button>
      ) : (
        " "
      )}
    </div>
  );
}
