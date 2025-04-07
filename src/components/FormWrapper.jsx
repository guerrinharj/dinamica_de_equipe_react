import React from 'react';

const FormWrapper = ({ title, children }) => (
    <div>
        <h1>{title}</h1>
        <form style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
            {children}
        </form>
    </div>
);

export default FormWrapper;
