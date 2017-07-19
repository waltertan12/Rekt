const VirtualPatch = function VirtualPatch(type, virtualNode, patch) {
    this.type = Number(type);
    this.virtualNode = virtualNode;
    this.patch = patch;
};

VirtualPatch.NONE = 0;
VirtualPatch.VIRTUAL_TEXT = 1;
VirtualPatch.VIRTUAL_NODE = 2;
VirtualPatch.PROPS = 3;
VirtualPatch.ORDER = 4;
VirtualPatch.INSERT = 5;
VirtualPatch.REMOVE = 6;

export default VirtualPatch;
