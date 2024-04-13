import React from 'react';

const EditButton = ({ editMode, handleToggleEditMode }) => {
  return (
    <button
      onClick={handleToggleEditMode}
      className={editMode ? 'cancel-button' : 'edit-button'}
      style={{height: '40px', width: '100px'}}
    >
      {editMode ? 'Cancel' : 'Edit'}
    </button>
  );
};

export default EditButton;
