import { transformNodeListToArray } from '../Utils/Utils';
import RektPatch from '../RektComponent/RektPatch';
import RektDOM from '../Rekt/RektDOM';
import ReconcileChildren from './ReconcileChildren';
import ReconcileProps from './ReconcileProps';

/**
 * @param  {Node|Element} node
 * @param  {Object}       patches
 */
const applyPatches = (node, patches) => {
    patches
        .forEach((patch) => {
            let parentNode;
            let newNode;
            switch (patch.type) {
            case RektPatch.TEXT:
                node.textContent = patch.patch.text;
                break;

            case RektPatch.ELEMENT:
                parentNode = node.parentNode;
                newNode = RektDOM.createElement(patch.patch);

                parentNode.replaceChild(newNode, node);
                break;

            case RektPatch.PROPS:
                ReconcileProps(node, patch.patch, patch.node);
                break;

            case RektPatch.REORDER:
                ReconcileChildren(node, patch.patch);
                break;

            case RektPatch.INSERT:
                parentNode = node.parentNode;
                newNode = RektDOM.createElement(patch.patch);

                parentNode.appendChild(newNode, node);
                break;

            case RektPatch.REMOVE:
                parentNode = node.parentNode;

                parentNode.removeChild(node);
                break;

            default:
                    // no op
            }
        });
};


/**
 * @param  {Node|Element} node
 * @param  {Object}       patches
 * @param  {Object}       index   Needs to be an object because can't pass int by reference
 */
const Reconcile = (node, patches, index = {index: 0}) => {
    let currentPatches = patches[index.index];

    transformNodeListToArray(node.childNodes)
        .forEach((child) => {
            index.index += 1;

            // Recursively reconcile the children
            // This should be in the EXACT same order as the diff
            Reconcile(child, patches, index);
        });

    if (currentPatches && currentPatches.length >  0) {
        applyPatches(node, currentPatches);
    }
};

export default Reconcile;

