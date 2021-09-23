import React, { useEffect } from "react";

function Input({ size = "sm", color = "blue-light", highlightColor = "blaze", outline, placeholder, name, required, maxLength, register }) {
    return (
        <input autoComplete="off" className={`block duration-100 px-3 py-2 text-${size} border border-${color} text-${color} placeholder-${color} focus:border-${highlightColor} focus:text-${highlightColor} focus:placeholder-${highlightColor} rounded-md my-2 w-48 lg:w-64 text-`} placeholder={placeholder} />
    )

}

export default Input