import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import CodeEditor from './CodeEditor';
import Stack from '@mui/material/Stack';
import UnitTestClassDisplayAndEditHeader from './UnitTestClassDisplayAndEditHeader';

const UnitTestClassDisplayAndEdit = ({ filename, data }) => {
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(false);
  const [code, setCode] = useState(data); 

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
    // Reset edited state when switching between edit mode
    setEdited(false);
  };

  const handleTextChange = (editedCode) => {
    setEdited(true); // Set edited state to true when text changes
    setCode(editedCode);
    console.log(code);
    console.log(editedCode);
  };

  return (
    <>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0}
            className='display'
        >
      
            {editMode ? <CodeEditor data={code} onChange={handleTextChange} /> : <CodeDisplay filename={filename} data={code} />}

            <UnitTestClassDisplayAndEditHeader
                editMode={editMode}
                edited={edited} 
                handleToggleEditMode={handleToggleEditMode}
            />
            
        </Stack>
    </>
  );
};

export default UnitTestClassDisplayAndEdit;
