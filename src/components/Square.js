import React from 'react'

const Square = ( {value, index, handleClickP1,} ) => {
  
  const handleClick = () => {
    handleClickP1(index)
   }
  return (
    <div className="square" onClick={handleClick} >
    {value}
    </div>
  )
}

export default Square
