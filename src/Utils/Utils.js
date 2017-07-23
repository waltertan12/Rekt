/**
 * Returns true if the argument passed in is an Object
 * 
 * @param  {mixed}    obj
 * @return {Boolean}
 */
export const isObject = obj => (Boolean(obj) && typeof obj === 'object' && Array.isArray(obj) === false);

/**
 * Returns true if the argument passed in is a String or a Number
 * 
 * @param  {Any}     obj
 * @return {Boolean}
 */
export const isPrimitive = obj => ((typeof obj === 'number') || (typeof obj === 'string'));

/**
 * @param  {NodeList} nodeList
 * @return {Node[]}   nodeArray
 */
export const transformNodeListToArray = (nodeList) => {
    const len = nodeList.length;
    const nodeArray = [];

    for (let i = 0; i < len; i += 1) {
        const node = nodeList[i];
        nodeArray.push(node);
    }

    return nodeArray;
};
