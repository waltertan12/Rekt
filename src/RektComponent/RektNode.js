import { isRektNode } from './RektComponentUtils';

/**
 * A virutal representation of a Node
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 * @param {String}           tagName
 * @param {Object}           props
 * @param {Array}            children
 * @param {String|undefined} key
 */
const RektNode = function RektNode(tagName, props, children, key) {
    this.type = 'RektNode';
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.key = (key === 0 || key) ? String(key) : undefined;
    this.count = children.length +
        children.reduce((count, child) => {
            if (isRektNode(child)) {
                count += child.count;
            }

            return count;
        }, 0);
};

export default RektNode;
