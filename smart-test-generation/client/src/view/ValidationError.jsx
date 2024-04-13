import React from 'react'

const ValidationError = ({show}) => {
  return (
    <>
        {show && <p style={{ color: 'red' }}>Invalid Git repository URL format</p>}
    </>
  )
}

export default ValidationError