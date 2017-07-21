/**
 * Returns true if the argument passed in is an Object
 * 
 * @param  {mixed}    obj
 * @return {Boolean}
 */
export const isObject = obj => (obj && typeof obj === 'object' && Array.isArray(obj) === false);

/**
 * Returns true if the argument passed in is a String or a Number
 * 
 * @param  {Any}     obj
 * @return {Boolean}
 */
export const isPrimitive = obj => ((typeof obj === 'number') || (typeof obj === 'string'));
