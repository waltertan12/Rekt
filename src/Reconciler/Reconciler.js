import RektPatch from '../RektComponent/RektPatch'
import RektDOM from '../Rekt/RektDOM'
import ReconcileProps from './ReconcileProps'

RektPatch.NONE = 0;
RektPatch.TEXT = 1;
RektPatch.ELEMENT = 2;
RektPatch.PROPS = 3;
RektPatch.REORDER = 4;
RektPatch.INSERT = 5;
RektPatch.REMOVE = 6;

/**
 * @param  {Node|Element} node
 * @param  {Object}       patches
 */
const applyPatches = (node, patches) => {
    patches
        .forEach(patch => {
            switch(patch.type) {
                case RektPatch.TEXT:
                    node.textContent = patch.patch.text;
                    break;

                case RektPatch.ELEMENT:
                    let parentNode = node.parentNode
                    let newNode = RektDOM.createElement(patch.patch)

                    parentNode.replaceChild(newNode, node)
                    break;

                case RektPatch.PROPS:
                    ReconcileProps(node, patch.patch, patch.node)
                    break;

                case RektPatch.REORDER:
                    reconcileChildren(node, patch.patch)
                    break;

                case RektPatch.INSERT:
                    let parentNode = node.parentNode
                    let newNode = RektDOM.createElement(patch.patch)

                    parentNode.appendChild(newNode, node)
                    break;

                case RektPatch.REMOVE:
                    let parentNode = node.parentNode

                    parentNode.removeChild(node)
                    break;

                default:
                    // no op
            }
        })
}


/**
 * @param  {Node|Element}     node
 * @param  {Object}           patches
 * @param  {Number} [index=0] index
 */
const reconcile = (node, patches, index = 0) => {
    let currentPatches = patches[walker.index]
    let len = 0
    if (node.childNodes) {
        len = node.childNodes.length
    }

    for (let childIndex = 0; childIndex < len; childIndex++) {
        let child = node.childNodes[childIndex]

        reconcile(child, patches, ++index)
    }
}

export default reconcile
