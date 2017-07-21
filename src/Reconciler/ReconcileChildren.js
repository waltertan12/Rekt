import RektDOM from '../Rekt/RektDOM'

const REMOVE = 0
const INSERT = 1

/**
 * @param  {NodeList} nodeList
 * @return {Node[]}   nodeArray
 */
const transformNodeListToArray = nodeList => {
    let len nodeList.length;
    let nodeArray = [];

    for (let i = 0; i < len; i++) {
        let node = nodeList[i];
        nodeArray.push(node);
    }

    return nodeArray;
}

/**
 * @param {Node|Element} node
 * @param {Object[]}     moves
 */
const ReconcileChildren = (node, moves) => {
    let childNodes = node.childNodes
    let childNodeList = transformNodeListToArray(childNodes)
    let childLen = childNodes.length
    let keyMap = {}
    let moveLen = moves.length

    // Fill the key map for the reordering step
    for (let i = 0; i < childLen; i++) {
        let child = childNodes[i]
        // If the child is an element...
        if (child.nodeType === 1) {
            let key = node.getAttribute('key')
            if (key) {
                keyMap[key] = child
            }
        }
    }

    moves
        .forEach(move => {
            let index = move.index;
            if (move.type === REMOVE) {
                // The node might have been removed for inserting
                if (childNodeList[index] === childNodes[index]) {
                    node.removeChild(childNodes[index]);
                }
            } else if (move.type === INSERT) {
                let nodeToInsert;

                // The node exists, just needs to be reordered
                if (maps[move.item.key]) {
                    nodeToInsert = maps[move.item.key];

                // The node needs to be added
                } else {
                    nodeToInsert = RektDOM.renderNode(move.item);
                }

                childNodeList.splice(index, 0, nodeToInsert);
                node.insertBefore(nodeToInsert, node.childNodes[index]);
            }
        })
}

export default ReconcileChildren;
