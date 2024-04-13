import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import CodeEditor from './CodeEditor';

const UnitTestClassDisplayAndEdit = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(false);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleTextChange = () => {
    setEdited(true);
  };

  return (
    <>
      <button onClick={handleToggleEditMode}>
        {editMode ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={() => console.log('Save button clicked')} disabled={!edited}>
        Save
      </button>
      {editMode ? <CodeEditor data={data} onChange={handleTextChange} /> : <CodeDisplay data={data} />}
    </>
  );
};

export default UnitTestClassDisplayAndEdit;
