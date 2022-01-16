import React, { useEffect } from "react";

function Input({
  size = "sm",
  color = "blue-light",
  onEnter,
  autofocus = false,
  highlightColor = "blaze",
  classes,
  error,
  success,
  change,
  blur,
  value,
  outline,
  placeholder,
  name,
  required,
  maxLength,
  register,
}) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, []);

  let handleKeyDown = (event) => {
    if (event.keyCode == 13 && onEnter) {
      onEnter();
    }
  };

  return (
    <>
      <input
        onChange={change}
        onKeyDown={handleKeyDown}
        onBlur={blur}
        value={value}
        ref={inputRef}
        autoComplete="off"
        className={`${classes} block duration-100 px-3 py-2 text-${size} border border-${color} text-${color} placeholder-${color} focus:border-${highlightColor} focus:text-${highlightColor} focus:placeholder-${highlightColor} rounded-sm my-2 w-48 lg:w-64 ${
          error ? "border-4 border-red" : ""
        } ${success ? "border-4 border-green" : ""}`}
        placeholder={placeholder}
      />
      {error && <div class="bg-red-light text-white p-2">{error}</div>}
    </>
  );
}

export default Input;
