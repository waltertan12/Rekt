import DiffChildren from './DiffChildren';
import DiffProps from './DiffProps';
import ListDiff from 'list-diff2';
import VirtualPatch from '../VirtualDOM/VirtualPatch';
import { isVirtualNode, isVirtualText } from '../VirtualDOM/VirtualUtils';

const walk = (oldNode, newNode, patches, index) => {
    const currentPatch = [];

    // A node has been removed
    if (!newNode) {

    // The node is a TextNode, check if the text is the same
    } else if (isVirtualText(oldNode) && isVirtualText(newNode)) {
        if (oldNode.text !== newNode.text) {
            currentPatch.push({}); // TODO
        }

    // Nodes are the same, diff the props
    } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
        const propsPatch = diffProps(oldNode, newNode);
        if (propsPatch) {
            currentPatch.push({}); // TODO
        }

        DiffChildren(oldNode.children, newNode.children, patches, currentPatch, index);

    // Nodes are not the same, replace the old node with the new node
    } else {
        currentPatch.push({}); // TODO
    }

    if (currentPatch.length) {
        patches[index] = currentPatch;
    }
};

const Diff = (oldTree, newTree) => {
    const index = 0;
    const patches = {};

    walk(oldTree, newTree, patches, index);

    return patches;
};

export default Diff;
