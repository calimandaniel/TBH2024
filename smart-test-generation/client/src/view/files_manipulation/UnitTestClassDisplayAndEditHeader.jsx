import React from 'react'
import UnitTestClassDisplayAndEditMenu from './UnitTestClassDisplayAndEditMenu';
import Stack from '@mui/material/Stack';
import FileIcon from '../icons/FileIcon';
import FilenameDisplay from './FilenameDisplay';

const UnitTestClassDisplayAndEditHeader = ({ filename, editMode, edited, handleToggleEditMode}) => {
  return (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={'100%'}
    >                
        <FilenameDisplay filename={filename}/>
        <UnitTestClassDisplayAndEditMenu 
            editMode={editMode} 
            edited={edited} 
            handleToggleEditMode={handleToggleEditMode}
        />
    </Stack>
  )
}

export default UnitTestClassDisplayAndEditHeader