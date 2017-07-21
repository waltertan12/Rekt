/* global document */
import { isObject, isPrimitive } from '../Utils/Utils';
import { isRektText } from '../RektComponent/RektComponentUtils';

/**
 * Applies virtual props to an acutal DOM node
 * 
 * @param  {Node|Element} node
 * @param  {Object}       props
 */
const applyProps = (node, props) => {
    Object
        .keys(props)
        .forEach((propName) => {
            const prop = props[propName];

            // FIXME: This sucks
            // The prop is an event listener
            if (typeof prop === 'function' && propName.startsWith('on')) {
                node.addEventListener(propName.substring(2), prop);

            // The prop is an object
            } else if (isObject(prop)) {
                Object
                    .keys(prop)
                    .forEach((attribute) => {
                        node[propName][attribute] = prop[attribute];
                    });

            // The prop is normal
            } else if (isPrimitive(prop)) {
                node[propName] = prop;
            }
        });
};

const RektDOM = {
    /**
     * @param  {RektText|RektNode} virtualNode
     * @return {Node|Element}
     */
    renderNode(virtualNode) {
        if (isRektText(virtualNode)) {
            return document.createTextNode(virtualNode.text);
        }
        const node = document.createElement(virtualNode.tagName);

        applyProps(node, virtualNode.props);

        virtualNode.children
            .map(RektDOM.renderNode)
            .forEach(node.appendChild.bind(node));

        return node;
    },

    /**
     * Mounts a Rekt component onto a DOM node
     * 
     * @param {RektText|RektNode} virtualNode
     * @param {Node|Element}      root
     */
    mount(virtualNode, root) {
        root.appendChild(RektDOM.renderNode(virtualNode));
    },
};

export default RektDOM;
