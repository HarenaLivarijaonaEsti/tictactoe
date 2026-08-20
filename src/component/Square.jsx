
function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''} ${value === 'X' ? 'x' : ''
        }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

export default Square