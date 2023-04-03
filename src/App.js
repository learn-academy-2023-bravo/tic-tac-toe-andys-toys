import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [playerOne, setPlayerOne] = useState("p1")

  const handleClickP1 = (clickedSquare) => {
    let updateBoard = [...squares]
    setSquares
  }



  return (
    <>
      <h1 className="title">Tic Tac Toe </h1>
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default App