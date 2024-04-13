import React from 'react'



const FileBrowser = ({ data }) => {
    const renderNodes = (node, depth) => {
        return (
            <div key={node.name}>
                <p style={{ marginLeft: `${depth * 20}px` }}>{node.name}, depth: {depth}</p>
                {node.children && node.children.map(child => (
                    <React.Fragment key={child.name}>
                        {renderNodes(child, depth + 1)}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderNodes(data, 0)}
        </div>
    )
}

export default FileBrowser