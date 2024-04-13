import React from 'react'

const SaveButton = ({edited}) => {
  return (
    <button onClick={() => console.log('Save button clicked')} disabled={!edited}>
        Save
    </button>
  )
}

export default SaveButton