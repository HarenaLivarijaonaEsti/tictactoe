import { useState } from 'react'
import Square from './component/Square'
import calculateWinner from './utils/calculateWinner'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const result = calculateWinner(squares)
  const winner = result?.winner
  const winningLine = result?.line

  function handleRestart() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  function handleClick(i) {
    if (squares[i] != null || winner) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>

      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next player: {xIsNext ? 'X' : 'O'}</h2>
      )}

      <div className="board">

        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            isWinning={winningLine?.includes(0)}
          />

          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            isWinning={winningLine?.includes(1)}
          />

          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            isWinning={winningLine?.includes(2)}
          />
        </div>

        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            isWinning={winningLine?.includes(3)}
          />

          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            isWinning={winningLine?.includes(4)}
          />

          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            isWinning={winningLine?.includes(5)}
          />
        </div>

        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            isWinning={winningLine?.includes(6)}
          />

          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            isWinning={winningLine?.includes(7)}
          />

          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            isWinning={winningLine?.includes(8)}
          />
        </div>
        <button className="restart" onClick={handleRestart}>
          Rejouer
        </button>
      </div>
    </div>
  )
}

export default App
