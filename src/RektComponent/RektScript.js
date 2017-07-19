import RektElement from './RektElement';
import RektText from './RektText';
import { isRektElement, isRektText } from './RektComponentUtils';

/**
 * Recursively create RektScript children
 * 
 * @param  {mixed[]} children
 * @return {mixed}
 */
const generateChildren = children => children
    .map((child) => {
        if (typeof child === 'string') {
            return new RektText(child);
        } else if (typeof child === 'number') {
            return new RektText(String(child));
        } else if (isRektText(child) || isRektElement(child)) {
            return child;
        } else if (Array.isArray(child)) {
            return generateChildren(child);
        }

        throw new Error('Child is not of a valid type');
    });

/**
 * @param  {String}                       tagName
 * @param  {Object}                       properties
 * @param  {...[RektElement|RektText]} children
 * @return {RektElement}
 */
const RektScript = (tagName, properties, ...children) => {
    const props = properties;
    const key = properties.key

    // Remove key from the passed down props as it is only pertinent for the diff, not the RektElement
    if (props.hasOwnProperty('key')) {
        props.key = undefined;
    }

    return new RektElement(tagName, props, generateChildren(children), key);
};

export default RektScript;
