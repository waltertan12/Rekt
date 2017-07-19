import ListDiff from 'list-diff2';
import DiffProps from './DiffProps';
import RektPatch from '../RektComponent/RektPatch';
import { isRektElement, isRektText } from '../RektComponent/RektComponentUtils';

const diffChildren = (prevChildren, nextChildren, patches, currentPatch, index) => {
    let diffs = ListDiff(prevChildren, nextChildren, 'key')
    console.log(prevChildren, nextChildren, diffs)
    nextChildren = diffs.children // FIXME: Ehhhh

    if (diffs.moves.length) {
        currentPatch.push({ type: 'REORDER', payload: diffs }) // TODO: Add a reorder patch
    }

    // This is the child to the left of the current working child i.e. it is the left sibling
    // Initalize it to null because the first element will have no left sibling
    let prevSibling = null
    let currentIndex = index

    prevChildren.forEach((prevChild, prevChildIndex) => {
        let nextChild = nextChildren[prevChildIndex]

        // We need to get the correct working index since this diff only diffs the same layer of the tree
        // 
        // Why doesn't it diff against the whole tree? Because that would make the diff O(n^3)
        // Additionally, it's a nice heuristic because in the DOM, objects don't generally move from part of a tree
        if (prevSibling && (prevSibling.count > 0)) {
            currentIndex = currentIndex + prevSibling.count + 1
        } else {
            currentIndex = currentIndex + 1
        }

        walk(prevChild, nextChild, patches, currentIndex)
        prevSibling = prevChild
    })
};

const walk = (prevElement, nextElement, patches, index) => {
    const currentPatch = [];

    // A node has been removed
    if (!nextElement) {
        currentPatch.push({ type: 'REMOVE', payload: null })
    
    // The next element is a text node
    } else if (isRektText(nextElement)) {
        // If the previous element is not a text node, create one
        if (!isRektText(prevElement)) {
            currentPatch.push({ type: 'TEXT' })

        // If they both are text elements, create a patch if the text is different
        } else if (prevElement.text !== nextElement.text) {
            currentPatch.push({ type: 'TEXT', payload: nextElement.text })
        }

    // The next element is an element
    } else if (isRektElement(nextElement)) {
        // The previous element is also an element!
        if (isRektElement(prevElement)) {
            // Elements are exactly the same, so diff the props
            if (prevElement.tagName === nextElement.tagName && prevElement.key === nextElement.key) {
                const propsPatch = DiffProps(prevElement.props, nextElement.props);
                if (propsPatch) {
                    currentPatch.push({ type: 'PROPS', payload: propsPatch }); // TODO
                }

                // Diff the children as well
                diffChildren(prevElement.children, nextElement.children, patches, currentPatch, index);

            // The elements are different, so let's replace it with the next element
            } else {
                currentPatch.push({ type: 'ELEMENT', payload: nextElement })
            }

        // The prevous element is not an element, let's add a new element
        } else {
            currentPatch.push({ type: 'ELEMENT', payload: nextElement })
        }

    // Nodes are not the same, replace the old node with the new node
    } else {
        currentPatch.push({ type: 'ELEMENT', payload: nextElement }); // TODO
    }

    // Add patches, if there are any
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
