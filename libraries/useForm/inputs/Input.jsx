import React from 'react';
import { useContext } from 'react';
import { Handler } from '../useForm/';
import DefaultInput from './../components/DefaultInput';

function InputWrapper(props) {
    const {
        sx,
        name,
        maxLength,
        minLength,
        placeholder,
        type,
        onChange = null,
        ...rest
    } = props;
    const {
        errors,
        setValues,
        onChangeHandler,
        loading,
        config = {},
    } = useContext(Handler);
    const { Input = null } = config;

    let changeHandler = onChangeHandler;
    const customOnChange =
        onChange &&
        (e => {
            setValues({
                [name]: onChange(e),
            });
        });

    return React.createElement(Input || DefaultInput, {
        // value: value,
        name: name,
        type: type,
        onChange: customOnChange || changeHandler,
        disabled: loading,
        placeholder: placeholder,
        ...(errors[name] ? { error: true, helperText: errors[name] } : {}),
        ...rest,
    });
    // <>
    //     <DefaultInput
    //         value={value}
    //         name={name}
    //         type={type}
    //         onChange={changeHandler}
    //         disabled={loading}
    //         placeholder={placeholder}
    //         {...(errors[name] ? { error: true, helperText: errors[name] } : {})}
    //         {...rest}
    //     />
    //     <TextField
    //             value={value}
    //             name={name}
    //             onChange={changeHandler}
    //             disabled={loading}
    //             sx={{
    //                 marginTop: "8px",
    //                 "& .MuiOutlinedInput-input": {
    //                     padding: "8px",
    //                 },
    //                 ...sx,
    //             }}
    //             {...(errors[name] ? { error: true, helperText: errors[name] } : {})}
    //             {...rest}
    //         />
    // </>;
}

export default InputWrapper;
