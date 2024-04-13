import React from 'react'
import UnitTestClassDisplayAndEditMenu from './UnitTestClassDisplayAndEditMenu';
import Stack from '@mui/material/Stack';
import FileIcon from '../icons/FileIcon';

const UnitTestClassDisplayAndEditHeader = ({ filename, editMode, edited, handleToggleEditMode}) => {
  return (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={'100%'}
        // style={{margin: '-8px'}}
    >                
        <p><FileIcon/>{filename}</p>
        <UnitTestClassDisplayAndEditMenu 
            editMode={editMode} 
            edited={edited} 
            handleToggleEditMode={handleToggleEditMode}
        />
    </Stack>
  )
}

export default UnitTestClassDisplayAndEditHeader