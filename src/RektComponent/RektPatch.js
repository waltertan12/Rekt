const RektPatch = function RektPatch(type, node, patch) {
    this.type = Number(type);
    this.node = node;
    this.patch = patch;
};

RektPatch.NONE = 0;
RektPatch.REKT_TEXT = 1;
RektPatch.REKT_NODE = 2;
RektPatch.PROPS = 3;
RektPatch.ORDER = 4;
RektPatch.INSERT = 5;
RektPatch.REMOVE = 6;

export default RektPatch;
