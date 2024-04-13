import CODEICON from '../icons/CODEICON';
import React from 'react'

const FilenameDisplay = ({ filename }) => {
  return (
    <p style={{marginBottom:'32px', marginLeft: '10px', color: 'white'}}>
    <CODEICON/>{filename}
  </p>
  )
}

export default FilenameDisplay