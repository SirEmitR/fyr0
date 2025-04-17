const Input = ({
    id,
    name,
    type = "text",
    label,
    required = false,
    min= 0,
    minLength = 0,
    isUpperCase = false,
    defaultValue = "",
    autoComplete = "",
}) => {
  return (
    <div className='input-container text-sm md:text-base mt-6'>
        <input
            id={id}
            name={name}
            type={type}
            required={required}
            min={min}
            minLength={minLength}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            placeholder=''
            style={{
                textTransform: isUpperCase ? "uppercase" : "none",
            }}
            className='w-full p-2 border border-gray-400 rounded-md'
        />
        <label htmlFor={id} className="pointer-events-none">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
    </div>
  )
}

export default Input