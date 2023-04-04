import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { click } from '@testing-library/user-event/dist/click'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [turns, setTurns] = useState(9)

  const [clickedSquares, setClickedSquares] = useState(Array(9).fill(false))

  const handleClickP1 = (index) => {
    const updatedClickedSquares = [...clickedSquares]
    
    if (updatedClickedSquares[index]) {
      return 
    }

    updatedClickedSquares[index] = true

    setClickedSquares(updatedClickedSquares)
    
    setTurns((previousTurns) => previousTurns - 1)
    setSquares((previousSquares) => {
    const updatedSquares = [...previousSquares]
   
      
    if ( turns % 2 === 0) {
        updatedSquares[index] = "❌"
        setSquares(updatedSquares)
        
      } else if (turns % 2 !== 0) {
        updatedSquares[index] = "🅾"
        setSquares(updatedSquares)
      }
      return updatedSquares
    })
  }

/*
the turns variable needs to be outside our function 

and we need to set that to its own state

then we update that state in the handleclick function
no we should be able to just move that variable outside of the function

and then do a state setstate for the turns

then we add the set state turns to the function to have it updtae after it turns it to x

*/

  return(
    <>
      <h1 className="title">Tic Tac Toe </h1>
      {/* <button type="button" onclick="window.location.reload()">Restart Game</button> */}
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
          <p>Turns Left : {turns}</p>
      </div>
    </>
  )

}
export default App