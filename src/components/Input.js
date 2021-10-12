import React, { useEffect } from "react";

function Input({ size = "sm", color = "blue-light", onEnter, autofocus = false, highlightColor = "blaze", error, change, blur, outline, placeholder, name, required, maxLength, register }) {
    const inputRef = React.useRef(null);
    
    React.useEffect(()=>{
        if(autofocus){
            inputRef.current.focus();
        }
      }, []);

    let handleKeyDown = (event) => {
        if (event.keyCode == 13 && onEnter){
            onEnter();
        }
    }
    
    return (
        <>
        <input onChange={change} onKeyDown={handleKeyDown} onBlur={blur} ref={inputRef} autoComplete="off" className={`block duration-100 px-3 py-2 text-${size} border border-${color} text-${color} placeholder-${color} focus:border-${highlightColor} focus:text-${highlightColor} focus:placeholder-${highlightColor} rounded-sm my-2 w-48 lg:w-64 text-`} placeholder={placeholder} />
        {error && <div>{error}</div>}
        </>
    )

}

export default Input