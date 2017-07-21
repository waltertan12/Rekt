/**
 * Returns true of the argument passed in is an instance of RektNode
 * 
 * @param {*} node
 */
export const isRektNode = node => (node && node.type === 'RektNode');

/**
 * Returns true of the argument passed in is an instance of RektText
 * 
 * @param {*} node
 */
export const isRektText = node => (node && node.type === 'RektText');
