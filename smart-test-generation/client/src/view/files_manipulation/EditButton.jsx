import React from 'react';

const EditButton = ({ editMode, handleToggleEditMode }) => {
  return (
    <button
      onClick={handleToggleEditMode}
      className={editMode ? 'cancel-button' : 'edit-button'}
    >
      {editMode ? 'Cancel' : 'Edit'}
    </button>
  );
};

export default EditButton;
