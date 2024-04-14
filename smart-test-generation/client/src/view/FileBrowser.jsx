import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import FOLDERICON from './icons/FOLDERICON';
import CODEICON from './icons/CODEICON';
import DownArrowIcon from './icons/DownArrowIcon';
import LeftArrowIcon from './icons/LeftArrowIcon';

const FileBrowser = ({ data }) => {
    const renderNodes = (node, depth) => {
        if (node.children) {
            return (
                <Accordion allowZeroExpanded>
                    <AccordionItem key={node.name}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ marginLeft: `${depth * 20}px`, marginBottom: '5px' }}>
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
                <button 
                    type="submit" 
                    style={{backgroundColor: 'transparent', marginLeft: `${depth * 5}px`, whiteSpace: 'nowrap', marginBottom: '5px'}}
                    key={node.name}
                >
                    <CODEICON/>{node.name}
                </button>
            );
        }
    };

    return (
        <div className='files-browser' style={{ textAlign: 'left', borderRadius: '10px', padding: '10px', maxWidth: '20vw', overflowX: 'auto', minWidth: '300px', }}>
            {renderNodes(data, 0)}
        </div>
    );
};

export default FileBrowser;
