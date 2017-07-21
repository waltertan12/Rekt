import ListDiff from 'list-diff2';
import DiffProps from './DiffProps';
import RektPatch from '../RektComponent/RektPatch';
import { isRektNode, isRektText } from '../RektComponent/RektComponentUtils';

const diffChildren = (prevNode, nextNode, patches, currentPatch, index) => {
    const prevChildren = prevNode.children;
    let nextChildren = nextNode.children;
    const diffs = ListDiff(prevChildren, nextChildren, 'key');
    nextChildren = diffs.children;

    if (diffs.moves.length) {
        currentPatch.push(new RektPatch(RektPatch.REORDER, prevNode, diffs.moves));
    }

    // This is the child to the left of the current working child i.e. it is the left sibling
    // Let it be undefined because the first node will have no left sibling
    let prevSibling;
    let currentIndex = index;

    prevChildren.forEach((prevChild, prevChildIndex) => {
        const nextChild = nextChildren[prevChildIndex];

        // We need to get the correct working index since this diff only diffs the same layer of the tree
        // 
        // Why doesn't it diff against the whole tree? Because that would make the diff O(n^3)
        // Additionally, it's a nice heuristic because in the DOM, objects don't generally move from part of a tree
        if (prevSibling && (prevSibling.count > 0)) {
            currentIndex = currentIndex + prevSibling.count + 1;
        } else {
            currentIndex += 1;
        }

        walk(prevChild, nextChild, patches, currentIndex);
        prevSibling = prevChild;
    });
};

const walk = (prevNode, nextNode, patches, index) => {
    const currentPatch = [];

    // A node has been removed
    if (!nextNode) {
        currentPatch.push(new RektPatch(RektPatch.REMOVE, prevNode, nextNode));

    // The next node is a text node
    } else if (isRektText(nextNode)) {
        // If the previous node is not a text node, create one
        if (!isRektText(prevNode)) {
            currentPatch.push(new RektPatch(RektPatch.TEXT, prevNode, nextNode));

        // If they both are text nodes, create a patch if the text is different
        } else if (prevNode.text !== nextNode.text) {
            currentPatch.push(new RektPatch(RektPatch.TEXT, prevNode, nextNode));
        }

    // The next node is a DOM node
    } else if (isRektNode(nextNode)) {
        // The previous node is also a DOM node!
        if (isRektNode(prevNode)) {
            // Nodes are exactly the same, so diff the props
            if (prevNode.tagName === nextNode.tagName && prevNode.key === nextNode.key) {
                const propsPatch = DiffProps(prevNode.props, nextNode.props);
                if (propsPatch) {
                    currentPatch.push(new RektPatch(RektPatch.PROPS, prevNode, propsPatch));
                }

                // Diff the children as well
                diffChildren(prevNode, nextNode, patches, currentPatch, index);

            // The nodes are different, so let's replace it with the next node
            } else {
                currentPatch.push(new RektPatch(RektPatch.ELEMENT, prevNode, nextNode));
            }

        // The prevous node is not an node, let's add a new node
        } else {
            currentPatch.push(new RektPatch(RektPatch.ELEMENT, prevNode, nextNode));
        }

    // Nodes are not the same, replace the old node with the new node
    } else {
        currentPatch.push(new RektPatch(RektPatch.ELEMENT, prevNode, nextNode));
    }

    // Add patches, if there are any
    if (currentPatch.length) {
        patches[index] = currentPatch;
    }
};

const Diff = (prevTree, nextTree) => {
    const index = 0;
    const patches = {};

    walk(prevTree, nextTree, patches, index);

    return patches;
};

export default Diff;
