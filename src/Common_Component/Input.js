import React from 'react';

const Input = ({ type, label, name, placeholder, onChange, required, readOnly, value, ...rest }) => {
    return (
        <>
            {
                (type == "text" || type == "password" || type == "text" || type == "email") && (
                    <>
                        <div class="floating">
                            <input type={type} name={name} class="form-control" id={label} value={value} onChange={onChange} placeholder={placeholder} required={required} readOnly={readOnly} {...rest} />
                            <label for={label}>{label}</label>
                        </div>
                    </>
                )}

            {
                (type == "textarea") && (
                    <>
                        <div class="floating">
                            <textarea name={name} class="form-control" id={label} value={value} onChange={onChange} placeholder={placeholder} {...rest} required={required} readOnly={readOnly} />
                            <label for={label}>{label}</label>
                        </div>
                    </>
                )}

            {
                (type == "checkbox") && (
                    <>
                        <div class="form-check">
                            <input class="form-check-input" name={name} checked={value} onChange={onChange} type={type} id={name} {...rest} required={required} readOnly={readOnly} />
                            <label class="form-check-label" for={name}>
                                {label}
                            </label>
                        </div>
                    </>
                )}

            {
                (type == "search") && (
                    <div class="form-check">
                        <input type="text" name={name} class="form-control" id={label} value={value} onChange={onChange} placeholder={placeholder} required={required} readOnly={readOnly} {...rest} />
                    </div>
                )
            }

        </>
    )
}
export default Input;