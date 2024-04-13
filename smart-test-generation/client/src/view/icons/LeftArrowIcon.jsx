import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const LeftArrowIcon = () => {
  return (
    <KeyboardArrowLeftIcon
      className='arrow-icon'
        style={{
            verticalAlign: 'middle',
            marginTop: '-4px',
            marginRight: '4px'
        }} 
    />
  )
}

export default LeftArrowIcon