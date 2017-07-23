import ListDiff from 'list-diff2';


const diffChildren = (prevNode, nextNode, patches, currentPatch, index) => {
    // FIXME: Write a Levenshtein edit distance...
    const prevChildren = prevNode.children;
    let nextChildren = nextNode.children;
    const diffs = ListDiff(prevChildren, nextChildren, 'key');
    nextChildren = diffs.children;

    if (diffs.moves.length) {
        currentPatch.push(new RektPatch(RektPatch.REORDER, prevNode, diffs.moves));
    }

    // This is the child to the left of the current working child i.e. it is the left sibling
    // Let it be undefined because the first node will have no left sibling
    let prevSibling;
    let currentIndex = index;

    prevChildren.forEach((prevChild, prevChildIndex) => {
        const nextChild = nextChildren[prevChildIndex];

        // We need to get the correct working index since this diff only diffs the same layer of the tree
        // 
        // Why doesn't it diff against the whole tree? Because that would make the diff O(n^3)
        // Additionally, it's a nice heuristic because in the DOM, objects don't generally move from part of a tree
        if (prevSibling && (prevSibling.count > 0)) {
            currentIndex = currentIndex + prevSibling.count + 1;
        } else {
            currentIndex += 1;
        }

        walk(prevChild, nextChild, patches, currentIndex);
        prevSibling = prevChild;
    });
};