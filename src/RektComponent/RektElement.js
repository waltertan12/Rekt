const RektElement = function RektElement(tagName, props, children, key) {
    this.type = 'RektElement';
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.key = key ? String(key) : undefined;
};

export default RektElement;
