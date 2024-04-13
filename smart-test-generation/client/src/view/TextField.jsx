import React from 'react'

const TextField = ({value, handleChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="   Repository URL"
            className='textfield'
            style={{
                borderRadius: '10px', // Rounded border
                padding: '5px 10px', // Optional: Adjust padding as needed
              }}
        />
    )
}

export default TextField