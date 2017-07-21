import { isObject } from '../Utils/Utils';

/**
 * @param  {Object|undefined} diff
 * @return {Object}
 */
const getDiff = diff => (diff || {});

/**
 * @param  {Object}           prevProps
 * @param  {Object}           nextProps
 * @return {Object|undefined} diff
 */
const DiffProps = (prevProps, nextProps) => {
    let diff;

    Object
        .keys(prevProps)
        .forEach((prevPropKey) => {
            // A prop has been removed
            if (!nextProps.hasOwnProperty(prevPropKey)) {
                diff = getDiff(diff);
                diff[prevPropKey] = undefined;
            }

            const prevProp = prevProps[prevPropKey];
            const nextProp = nextProps[prevPropKey];

            // Props are the same!
            if (prevProp === nextProp) {

            // Both props are objects
            } else if (isObject(prevProp) && isObject(nextProp)) {
                // The prototypes differ, mark the change
                if (Object.getPrototypeOf(prevProp) !== Object.getPrototypeOf(nextProp)) {
                    diff = getDiff(diff);
                    diff[prevPropKey] = nextProp;

                // Prototypes are the same, so recursively check if their keys and values are the same
                } else {
                    const propDiff = DiffProps(prevProp, nextProp);
                    if (propDiff) {
                        diff = getDiff(diff);
                        diff[prevPropKey] = propDiff;
                    }
                }

            // Prop is a different primitive or has been removed
            } else {
                diff = getDiff(diff);
                diff[prevPropKey] = nextProp;
            }
        });

    // Check if there are any new props that need to be added
    Object
        .keys(nextProps)
        .forEach((nextPropKey) => {
            if (!prevProps.hasOwnProperty(nextPropKey)) {
                diff = getDiff(diff);
                diff[nextPropKey] = nextProps[nextPropKey];
            }
        });

    return diff;
};

export default DiffProps;
