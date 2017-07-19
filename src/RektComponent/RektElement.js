import { isRektElement } from './RektComponentUtils'

/**
 * @param {String}           tagName
 * @param {Object}           props
 * @param {Array}            children
 * @param {String|undefined} key
 */
const RektElement = function RektElement(tagName, props, children, key) {
    this.type = 'RektElement';
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.key = key ? String(key) : undefined;
    this.count = children.length + 
        children.reduce((count, child) => {
            if (isRektElement(child)) {
                count += child.count
            }

            return count
        }, 0);
};

export default RektElement;
