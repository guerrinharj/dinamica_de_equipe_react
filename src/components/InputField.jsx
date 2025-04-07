import React from 'react';

const InputField = ({ label, value, onChange, type = "text", ...rest }) => (
    <div style={{ marginBottom: "16px" }}>
        <label>{label}</label><br />
        <input
            type={type}
            value={value}
            onChange={onChange}
            {...rest}
        />
    </div>
);

export default InputField;
