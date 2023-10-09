import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
        autoFocus 
        type="text" 
        placeholder='Enter color value'
        value={colorValue}
        required
        onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input
