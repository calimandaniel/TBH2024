import React from 'react';

const SaveButton = ({ edited }) => {
  return (
    <button
      onClick={() => console.log('Save button clicked')}
      disabled={!edited}
      className={edited ? 'save-button' : 'disabled-button'}
    >
      Save
    </button>
  );
};

export default SaveButton;
