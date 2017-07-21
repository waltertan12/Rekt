import RektNode from './RektNode';
import RektText from './RektText';
import { isRektNode, isRektText } from './RektComponentUtils';

/**
 * Recursively create RektNodes and RektTexts
 * 
 * @param  {mixed[]} children
 */
const generateChildren = children => children
    .map((child) => {
        if (typeof child === 'string') {
            return new RektText(child);
        } else if (typeof child === 'number') {
            return new RektText(String(child));
        } else if (isRektText(child) || isRektNode(child)) {
            return child;
        } else if (Array.isArray(child)) {
            return generateChildren(child);
        }

        throw new Error('Child is not of a valid type');
    });

/**
 * @param  {String}                 tagName
 * @param  {Object}                 properties
 * @param  {...[RektNode|RektText]} children
 * @return {RektNode}
 */
const RektScript = (tagName, properties, ...children) => {
    const props = properties;
    const key = properties.key;

    // Remove key from the passed down props as it is only pertinent for the diff, not the RektNode
    if (props.hasOwnProperty('key')) {
        props.key = undefined;
    }

    return new RektNode(tagName, props, generateChildren(children), key);
};

export default RektScript;
