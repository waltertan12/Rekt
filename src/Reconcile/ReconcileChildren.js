import { transformNodeListToArray } from '../Utils/Utils';
import RektDOM from '../Rekt/RektDOM';

const REMOVE = 0;
const INSERT = 1;

/**
 * @param {Node|Element} node
 * @param {Object[]}     moves
 */
const ReconcileChildren = (node, moves) => {
    const childNodes = node.childNodes;
    const childNodeList = transformNodeListToArray(childNodes);
    const childLen = childNodes.length;
    const keyMap = {};

    // Fill the key map for the reordering step
    for (let i = 0; i < childLen; i += 1) {
        const child = childNodes[i];
        // If the child is an element...
        if (child.nodeType === 1) {
            const key = node.getAttribute('key');
            if (key) {
                keyMap[key] = child;
            }
        }
    }

    // FIXME: This is fucked
    moves
        .forEach((move) => {
            const index = move.index;
            if (move.type === REMOVE) {
                // The node might have been removed for inserting
                if (childNodeList[index] === childNodes[index] && childNodes[index]) {
                    node.removeChild(childNodes[index]);
                }
                childNodeList.splice(index, 1)
            } else if (move.type === INSERT) {
                let nodeToInsert;

                // The node exists, just needs to be reordered
                if (keyMap[move.item.key]) {
                    nodeToInsert = keyMap[move.item.key];

                // The node needs to be added
                } else {
                    nodeToInsert = RektDOM.renderNode(move.item);
                }

                childNodeList.splice(index, 0, nodeToInsert);
                // console.log(node.childNodes[index] || null);
                // console.log(node, '\n', move);
                // if (node && node.childNodes) {
                    node.insertBefore(nodeToInsert, node.childNodes[index] || null);
                // } else {
                    // node.insertBefore(nodeToInsert, null);
                // }
            }
        });
};

export default ReconcileChildren;
