import React from 'react'
import TextField from './TextField';
import SubmitButton from './SubmitButton';
import ValidationError from './ValidationError';

const GitRepositoryForm = ({onSubmit, value, handleChange, disabled, show}) => {
  return (
    <form onSubmit={onSubmit}>
        <TextField value={value} handleChange={handleChange} />
        <SubmitButton disabled={disabled}/>
        <ValidationError show={show}/>
    </form>
  )
}

export default GitRepositoryForm