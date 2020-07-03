import React from 'react';

const InputWithLabel = ({ id, children, value, onInputChange, type = 'text', isFocused }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        onChange={onInputChange}
        value={value} />
    </>
  )

}

export default InputWithLabel;