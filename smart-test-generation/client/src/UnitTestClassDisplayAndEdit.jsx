import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import CodeEditor from './CodeEditor';
import Stack from '@mui/material/Stack';

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
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={2}
        >
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <button onClick={handleToggleEditMode}>
                    {editMode ? 'Cancel' : 'Edit'}
                </button>
                <button onClick={() => console.log('Save button clicked')} disabled={!edited}>
                    Save
                </button>
        </Stack>
      
      {editMode ? <CodeEditor data={data} onChange={handleTextChange} /> : <CodeDisplay data={data} />}

        </Stack>
    </>
  );
};

export default UnitTestClassDisplayAndEdit;
