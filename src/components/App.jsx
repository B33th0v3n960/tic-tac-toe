import '../css/App.css'
import { useState } from 'react'

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  let status = 'X goes first'

  const winner = calculateWinner(squares)
  if (winner) status = 'Winner: ' + winner
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  function handleClick(i) {
    const winner = calculateWinner(squares)
    if (squares[i] || winner) return

    const nextSquares = squares.slice()

    if (xIsNext) nextSquares[i] = 'X'
    else nextSquares[i] = 'O'

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='board-row'>
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className='board-row'>
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>

      <h2 className='status'>{status}</h2>

      <button onClick={() => setSquares(Array(9).fill(null))} className='reset'>
        reset
      </button>
    </>
  )
}

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i in lines) {
    const [a, b, c] = lines[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a]
  }
  return null
}
