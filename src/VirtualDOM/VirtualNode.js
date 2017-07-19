import { isVirtualNode } from './VirtualUtils';

const VirtualNode = function VirtualNode(tagName, props, children, key) {
    this.type = 'VirtualNode';
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.key = key ? String(key) : undefined;

    let count = children.length;
    children
        .forEach((child) => {
            if (isVirtualNode(child)) {
                count += child.count;
            }
        });

    this.count = count;
};

export default VirtualNode;
