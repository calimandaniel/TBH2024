import React, { useState } from 'react';

const CodeEditor = ({ data, onChange }) => {
    const [code, setCode] = useState(data);

    const handleChange = (e) => {
        setCode(e.target.value);
        onChange();
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <textarea
                    value={code}
                    onChange={handleChange}
                    style={{ width: '100%', minHeight: '200px', fontFamily: 'Courier New', fontSize: '14px', lineHeight: '1.5', resize: 'none' }}
                    rows={code.split('\n').length} // Set rows dynamically based on number of lines
                />
            </div>
        </div>
    );
};

export default CodeEditor;
