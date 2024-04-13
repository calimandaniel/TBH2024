import React from 'react'

const SubmitButton = ({disabled}) => {
  return (
    <button 
      type="submit" 
      disabled={disabled} 
      className={disabled ? 'disabled-button' : 'enabled-button'}
      style={{height: '40px',  width: '100px'}}
    >
      Go
    </button>
  )
}

export default SubmitButton