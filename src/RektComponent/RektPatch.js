/**
 * Represents an actionable diff
 * 
 * @param {Number}                 type  Corresponds to a diff move e.g. INSERT or REORDER
 * @param {RektText|RektComponent} node  The virtual node that needs to be updated
 * @param {*}                      patch The patch (or update) for the virtual node
 */
const RektPatch = function RektPatch(type, node, patch) {
    this.type = Number(type);
    this.node = node;
    this.patch = patch;
};

RektPatch.NONE = 0;
RektPatch.TEXT = 1;
RektPatch.ELEMENT = 2;
RektPatch.PROPS = 3;
RektPatch.REORDER = 4;
RektPatch.INSERT = 5;
RektPatch.REMOVE = 6;

export default RektPatch;
