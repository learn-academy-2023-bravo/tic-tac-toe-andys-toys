import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  // const [playerOne, setPlayerOne] = useState(true)

  // const handleClickP1 = (clickedSquare) => {
  //   const updatedSquares = [...squares]
  //   updatedSquares[clickedSquare] = "X"
  //   setSquares(updatedSquares)
  //   setPlayerOne(false)
  // }
  
  // const playerTurn = 9

  return(
    <>
      <h1 className="title">Tic Tac Toe </h1>
      <div className="board">
          {squares.map((value, index) => {
            return(
            <Square 
            value={value}
            index={index}
            key={index}
            />
          )})
          }
      </div>
    </>
  )
}

export default App