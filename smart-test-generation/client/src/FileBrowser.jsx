import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import FOLDERICON from './FolderIcon';
import CODEICON from './CodeIcon';
import DownArrowIcon from './DownArrowIcon';
import LeftArrowIcon from './LeftArrowIcon';

const FileBrowser = ({ data }) => {
    const renderNodes = (node, depth) => {
        if (node.children) {
            return (
                <Accordion allowZeroExpanded>
                    <AccordionItem key={node.name}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ marginLeft: `${depth * 20}px` }}>
                                <FOLDERICON/>{node.name}
                                    <AccordionItemState>
                                        {({ expanded }) => (expanded ? <DownArrowIcon/> : <LeftArrowIcon/>)}
                                </AccordionItemState>
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
        <div style={{ textAlign: 'left', border: '2px solid white', borderRadius: '10px', padding: '10px' }}>
            {renderNodes(data, 0)}
        </div>
    );
};

export default FileBrowser;
