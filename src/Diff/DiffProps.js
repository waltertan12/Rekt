/**
 * @param  {Object|undefined} diff
 * @return {Object}
 */
const getDiff = diff => (diff || {});

/**
 * TODO: Move this to shared Utils folder
 * 
 * @param  {mixed}    obj
 * @return {Boolean}
 */
const isObject = obj => (obj && typeof obj === 'object' && Array.isArray(obj) === false);

/**
 * @param  {Object}           oldProps
 * @param  {Object}           newProps
 * @return {Object|undefined} diff
 */
const DiffProps = (oldProps, newProps) => {
    let diff;

    Object
        .keys(oldProps)
        .forEach((oldPropKey) => {
            // A prop has been removed
            if (!newProps.hasOwnProperty(oldPropKey)) {
                diff = getDiff(diff);
                diff[oldPropKey] = undefined;
            }

            const oldProp = oldProps[oldPropKey];
            const newProp = newProps[oldPropKey];

            // Props are the same!
            if (oldProp === newProp) {

                // Both props are objects
            } else if (isObject(oldProp) && isObject(newProp)) {
                // The prototypes differ, mark the change
                if (Object.getPrototypeOf(oldProp) !== Object.getPrototypeOf(newProp)) {
                    diff = getDiff(diff);
                    diff[oldPropKey] = newProp;

                    // Prototypes are the same, so recursively check if their keys and values are the same
                } else {
                    const propDiff = DiffProps(oldProp, newProp);
                    if (propDiff) {
                        diff = getDiff(diff);
                        diff[oldProp] = propDiff;
                    }
                }

                // Prop is a different primitive or has been removed
            } else {
                diff = getDiff(diff);
                diff[oldPropKey] = newProp;
            }
        });

    // Check if there are any new props that need to be added
    Object
        .keys(newProps)
        .forEach((newPropKey) => {
            if (!oldProps.hasOwnProperty(newPropKey)) {
                diff = getDiff(diff);
                diff[newPropKey] = newProps[newPropKey];
            }
        });

    return diff;
};

export default DiffProps;
