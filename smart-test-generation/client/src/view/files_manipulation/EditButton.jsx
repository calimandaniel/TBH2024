import React from 'react'

const EditButton = ({ editMode, handleToggleEditMode}) => {
  return (
    <button onClick={handleToggleEditMode}>
        {editMode ? 'Cancel' : 'Edit'}
    </button>
  )
}

export default EditButton