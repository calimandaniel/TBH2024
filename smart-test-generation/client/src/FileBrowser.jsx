import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

import FOLDERICON from './FolderIcon';
import CODEICON from './CodeIcon';

const FileBrowser = ({ data }) => {
    const renderNodes = (node, depth) => {
        if (node.children) {
            return (
                <Accordion allowMultipleExpanded>
                    <AccordionItem key={node.name}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ marginLeft: `${depth * 20}px` }}>
                                    <FOLDERICON/>{node.name}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {node.children.map(child => (
                                <React.Fragment key={child.name}>
                                    <div style={{ marginLeft: `${depth * 20}px` }}>
                                        {renderNodes(child, depth + 1)}
                                    </div>
                                </React.Fragment>
                            ))}
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            );
        } else {
            return (
                <p key={node.name} style={{ marginLeft: `${depth * 20}px` }}>
                    <CODEICON/>{node.name}, depth: {depth}
                </p>
            );
        }
    };

    return (
        <div style={{ width: '500px', backgroundColor: 'red', textAlign: 'left' }}>
            {renderNodes(data, 0)}
        </div>
    );
};

export default FileBrowser;
