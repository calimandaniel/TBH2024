import React, { useState } from 'react';
import CodeDisplay from './CodeDisplay';
import CodeEditor from './CodeEditor';
import Stack from '@mui/material/Stack';
import UnitTestClassDisplayAndEditHeader from './UnitTestClassDisplayAndEditHeader';

const UnitTestClassDisplayAndEdit = ({ filename, data }) => {
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
            spacing={0}
        >
            <UnitTestClassDisplayAndEditHeader
                filename={filename}
                editMode={editMode}
                edited={edited} 
                handleToggleEditMode={handleToggleEditMode}
            />
      
            {editMode ? <CodeEditor data={data} onChange={handleTextChange} /> : <CodeDisplay data={data} />}

        </Stack>
    </>
  );
};

export default UnitTestClassDisplayAndEdit;
