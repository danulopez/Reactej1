 function Input ({placeholder, labelValue}) {
    return (
        
            <>
            <label htmlFor={labelValue}>{labelValue}</label>
            <input type="text" id={labelValue} placeholder={placeholder}/>
            </>
        
    )
}

export default Input;