import { isObject } from '../Utils/Utils';

/**
 * @param  {Node|Element}     node
 * @param  {String}           propKey
 * @param  {*}                propValue
 * @param  {Object|undefined} prevProps 
 */
const removeProp = (node, propKey, propValue, prevProps) => {
    if (!prevProps) {
        return;
    }

    const prevProp = prevProps[propKey];
    if (propKey === 'style') {
        Object
            .keys(prevProp)
            .forEach((styleName) => {
                node.style[styleName] = '';
            });
    } else if (typeof prevProp === 'string') {
        node[propKey] = '';
    } else {
        node[propKey] = null;
    }
};

/**
 * @param  {Node|Element}     node
 * @param  {String}           propKey
 * @param  {Object}           prop
 * @param  {Object}           propPatches
 * @param  {Object|undefined} prevProps
 */
const reconcileObjectProp = (node, propKey, prop, propPatches, prevProps) => {
    // TODO: Figure out what to do with this
    let prevProp;
    if (prevProps) {
        prevProp = prevProps[propKey];
    }

    if (propKey === 'style') {
        Object
            .keys(prop)
            .forEach((styleName) => {
                const styleValue = prop[styleName];
                if (styleValue === undefined) {
                    node.style[styleName] = '';
                } else {
                    node.style[styleName] = styleValue;
                }
            });
    }
};

/**
 * @param  {Node|Element}     node
 * @param  {Object}           propPatches
 * @param  {Object|undefined} prevProps
 */
const ReconcileProps = (node, propPatches, prevProps) => {
    Object
        .keys(propPatches)
        .forEach((propKey) => {
            const prop = propPatches[propKey];
            if (prop === undefined) {
                removeProp(node, propKey, prop, prevProps);
            } else if (isObject(prop)) {
                reconcileObjectProp(node, propKey, prop, propPatches, prevProps);
            } else {
                node[propKey] = prop;
            }
        });
};

export default ReconcileProps;
