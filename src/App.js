import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [playerOne, setPlayerOne] = useState(true)

   
  // const handleClickP1 = (clickedSquare) => {
  //   const updatedSquares = [...squares]
  //   updatedSquares[clickedSquare] = "X"
  //   setSquares(updatedSquares)
  //   setPlayerOne(false)
  // }

  // const handleClickP2 = (clickedSquare) => {
  //   const updatedSquares = [...squares]
  //   updatedSquares[clickedSquare] = "O"
  //   setSquares(updatedSquares)
  //   setPlayerOne(true)
  // }
  
  const handleClickP1 = (clickedSquare) => {
    let turns = 9
    if (turns % 2 === 0){ 
    const updatedSquares = [...squares]
    updatedSquares[clickedSquare] = "X"
    setSquares(updatedSquares)
    turns -= 1
    } else {
      const updatedSquares = [...squares]
    updatedSquares[clickedSquare] = "0"
    setSquares(updatedSquares)
    turns -= 1
    }
    

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
            handleClickP1={handleClickP1}
            />
          )})
          }
      </div>
    </>
  )
}

export default App