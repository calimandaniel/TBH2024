import React from 'react'

const TextField = ({value, handleChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Repository URL"
            className='textfield'
        />
    )
}

export default TextField