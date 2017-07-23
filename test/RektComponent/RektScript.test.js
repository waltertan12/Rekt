import RektScript from '../../src/RektComponent/RektScript';

test('RektScript should create a paragraph node', () => {
    const rektNode = RektScript('p', {});

    expect(rektNode.tagName).toBe('p');
    expect(rektNode.children.length).toBe(0);
});

test('RektScript should create a paragraph node with a text node as a child', () => {
    const rektNode = RektScript('p', {}, 'Hello');

    expect(rektNode.tagName).toBe('p');
    expect(rektNode.count).toBe(1);
    expect(rektNode.children[0].type).toBe('RektText');
    expect(rektNode.children[0].text).toBe('Hello');
});

test('RektScript should create an unordered list with nested children', () => {
    const rektNode = RektScript('ul', {}, 
        RektScript('li', {}, 'Item one'),
        RektScript('li', {}, 'Item two'),
        RektScript('li', {}, 'Item three')
    );

    expect(rektNode.children.length).toBe(3);
});

test('RektScript should return the correct number of descendents', () => {
    const rektNode = RektScript('ul', {}, 
        RektScript('li', {}, 'Item one'),
        RektScript('li', {}, 'Item two'),
        RektScript('li', {}, 'Item three')
    );

    expect(rektNode.count).toBe(6);
});

test('RektScript should remove key from props', () => {
    const rektNode = RektScript('p', { key: ':)' }, ':)');

    expect(rektNode.props.key).toBe(undefined);
    expect(rektNode.key).toBe(':)');
});
