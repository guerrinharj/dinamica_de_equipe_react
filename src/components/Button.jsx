import React from 'react';

const Button = ({ children, onClick, type = "button", color = "#4CAF50", ...rest }) => (
    <button
        type={type}
        onClick={onClick}
        style={{
            backgroundColor: color,
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px"
        }}
        {...rest}
    >
        {children}
    </button>
);

export default Button;
