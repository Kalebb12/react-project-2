const Input = ({type , name , placeholder ,value , onChange ,required,min}) => {
  return (
    <input
      type={type || 'text'}
      name={name}
      id={`${name}-field`}
      className="border border-[var(--dark)] outline-none rounded-[10px] p-4 w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={min}
    />
  );
};

export default Input;
