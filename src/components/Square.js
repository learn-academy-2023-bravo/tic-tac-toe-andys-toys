import React from 'react'

const Square = ( {value} ) => {
  
  // const handleClick = () => {
    console.log("clicked")
  // }
  return (
    <div className="square" >
    {value}
    </div>
  )
}

export default Square
