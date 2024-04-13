import React, { useState } from 'react';

const CodeEditor = ({ data, onChange }) => {
    const [code, setCode] = useState(data);

    const handleChange = (e) => {
        setCode(e.target.value);
        onChange(code);
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <textarea
                    value={code}
                    onChange={handleChange}
                    style={{ minWidth: '400px', maxWidth: '20vw', minHeight: '200px', fontFamily: 'Courier New', fontSize: '14px', lineHeight: '1.5', resize: 'none', marginTop: '7px'}}
                    rows={code.split('\n').length} // Set rows dynamically based on number of lines
                />
            </div>
        </div>
    );
};

export default CodeEditor;
