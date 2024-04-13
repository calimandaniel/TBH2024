import React from 'react';

const SaveButton = ({ edited }) => {
  return (
    <button
      onClick={() => console.log('Save button clicked')}
      disabled={!edited}
      className={edited ? 'save-button' : 'disabled-button'}
      style={{height: '45px',  width: '100px'}}
    >
      Save
    </button>
  );
};

export default SaveButton;
