function Button({ disabled, children, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`text-xl cursor-pointer rounded-3xl text-blue py-3 px-20 ${
        !disabled ? "bg-blaze my-shadow" : "bg-gray"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
