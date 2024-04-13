import React from 'react'
import UnitTestClassDisplayAndEditMenu from './UnitTestClassDisplayAndEditMenu';
import Stack from '@mui/material/Stack';

const UnitTestClassDisplayAndEditHeader = ({ editMode, edited, handleToggleEditMode}) => {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width={'100%'}
        style={{marginBottom: '10px', marginTop: '10px'}}
    >                
        
        <UnitTestClassDisplayAndEditMenu 
            editMode={editMode} 
            edited={edited} 
            handleToggleEditMode={handleToggleEditMode}
        />
    </Stack>
  )
}

export default UnitTestClassDisplayAndEditHeader