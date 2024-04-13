import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const FileIcon = () => {
  return (
    <InsertDriveFileIcon
        className='folder-icon'
        style={{
            verticalAlign: 'middle',
            marginTop: '-4px',
            marginRight: '4px'
        }} 
    />
  )
}

export default FileIcon