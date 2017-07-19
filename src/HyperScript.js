import VirtualNode from './VirtualDOM/VirtualNode';
import VirtualText from './VirtualDOM/VirtualText';
import { isVirtualNode, isVirtualText } from './VirtualDOM/VirtualUtils';

/**
 * Recursively create HyperScript children
 * 
 * @param  {mixed[]} children
 * @return {mixed}
 */
const generateChildren = children => children
    .map((child) => {
        if (typeof child === 'string') {
            return new VirtualText(child);
        } else if (typeof child === 'number') {
            return new VirtualText(String(child));
        } else if (isVirtualText(child) || isVirtualNode(child)) {
            return child;
        } else if (Array.isArray(child)) {
            return generateChildren(child);
        }

        throw new Error('Child is not of a valid type');
    });

/**
 * @param  {String}                       tagName
 * @param  {Object}                       properties
 * @param  {...[VirtualNode|VirtualText]} children
 * @return {VirtualNode}
 */
const HyperScript = (tagName, properties, ...children) => {
    const props = Object.assign({}, properties);

    // Remove key from the passed down props as it is only pertinent for the diff, not the VirtualNode
    if (props.hasOwnProperty('key')) {
        props.key = undefined;
    }

    return new VirtualNode(tagName, props, generateChildren(children), properties.key);
};

export default HyperScript;
