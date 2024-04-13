import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DownArrowIcon = () => {
  return (
    <KeyboardArrowDownIcon
      className='arrow-icon'
        style={{
            verticalAlign: 'middle',
            marginTop: '-4px',
            marginRight: '4px'
        }} 
    />
  )
}

export default DownArrowIcon