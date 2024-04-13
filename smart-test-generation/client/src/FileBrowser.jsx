import React from 'react'

const FileBrowser = ({ data }) => {
    const renderNodes = (node, depth) => {
        const dashes = '-'.repeat(depth);
        return (
            <div key={node.name}>
                <p>{depth > 0 && '|'}{dashes}{'> '} {node.name}, depth: {depth}</p>
                {node.children && node.children.map(child => (
                    <React.Fragment key={child.name}>
                        {renderNodes(child, depth + 1)}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    return (
        <div style={{width: '500px', backgroundColor: 'red',  textAlign: 'left'}}>
            {renderNodes(data, 0)}
        </div>
    )
}

export default FileBrowser