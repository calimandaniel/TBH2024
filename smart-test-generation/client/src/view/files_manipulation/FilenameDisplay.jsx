import CODEICON from '../icons/CODEICON';
import React from 'react'

const FilenameDisplay = ({ filename }) => {
  return (
    <p style={{marginLeft: '10px', color: 'white', whiteSpace: 'nowrap'}}>
    <CODEICON/>{filename}
  </p>
  )
}

export default FilenameDisplay