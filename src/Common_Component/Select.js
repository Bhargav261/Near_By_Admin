import React from 'react';

const Select = ({ label, name, value, options, required, readOnly, onChange, ...rest }) => {
    return (
        <>
            <div className="floating">
                <select id="inputState" class="form-control" onChange={onChange} name={name} value={value} required={required} readOnly={readOnly} {...rest}>
                    <option value="">Please Select</option>
                    {
                        options?.length > 0 && options.map((item, index) => (
                            <option value={item.value}>{item.label}</option>
                        ))
                    }
                </select>
                <label class="select" for="inputState">{label}</label>
            </div>
        </>
    )
}
export default Select;