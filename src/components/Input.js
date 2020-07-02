import React from 'react';

const InputWithLabel = ({ id, children, value, onInputChange, type = 'text' }) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
  </>
)

export default InputWithLabel;