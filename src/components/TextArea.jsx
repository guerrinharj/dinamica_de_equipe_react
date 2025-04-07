import React from 'react';

const TextArea = ({ label, value, onChange, ...rest }) => (
    <div style={{ marginBottom: "16px" }}>
        <label>{label}</label><br />
        <textarea
            value={value}
            onChange={onChange}
            {...rest}
        />
    </div>
);

export default TextArea;
