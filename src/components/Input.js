import React from 'react';

const InputWithLabel = ({ id, label, value, onInputChange, type = 'text' }) => (
  <>
    <label htmlFor={id}>{label}: </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
  </>
)

export default InputWithLabel;