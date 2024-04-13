import React from 'react'

const CodeDisplay = ({ data }) => {
  return (
    <pre style={{ textAlign: 'left',backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        <code style={{ fontFamily: 'Courier New', fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
            {data}
        </code>
    </pre>
  )
}

export default CodeDisplay