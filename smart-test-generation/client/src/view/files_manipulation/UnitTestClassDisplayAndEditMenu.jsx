import React from 'react'
import Stack from '@mui/material/Stack';
import EditButton from './EditButton';
import SaveButton from './SaveButton';

const UnitTestClassDisplayAndEditMenu = ({ editMode, edited, handleToggleEditMode}) => {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{marginRight: '10px'}}
    >
        <EditButton editMode={editMode} handleToggleEditMode={handleToggleEditMode} />
        <SaveButton edited={edited} />
    </Stack> 
  )
}

export default UnitTestClassDisplayAndEditMenu