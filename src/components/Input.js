import React from 'react';

const InputWithLabel = ({ id, label, value, onInputChange, type }) => (
  <>
    <label htmlFor={id}>{label}: </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
  </>
)

export default InputWithLabel;