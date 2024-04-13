import React from 'react'

const SubmitButton = ({disabled}) => {
  return (
    <button type="submit" disabled={disabled} className={disabled ? 'disabled-button' : 'enabled-button'}>Go</button>
  )
}

export default SubmitButton