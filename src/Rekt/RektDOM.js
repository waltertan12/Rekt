/* global document */
import { isVirtualText } from '../VirtualDOM/VirtualUtils';

/**
 * TODO: Move this to shared Utils folder
 * 
 * @param  {mixed}    obj
 * @return {Boolean}
 */
const isObject = obj => (obj && typeof obj === 'object' && Array.isArray(obj) === false);

const applyProps = (element, props) => {
    Object
        .keys(props)
        .forEach((propName) => {
            const prop = props[propName];

            // The prop is an event listener
            if (typeof prop === 'function' && propName.startsWith('on')) {
                element.addEventListener(propName.substring(2), prop);

            // The prop is an object
            } else if (isObject(prop)) {
                Object
                    .keys(prop)
                    .forEach((attribute) => {
                        element[propName][attribute] = prop[attribute];
                    });

                // The prop is normal
            } else if ((typeof prop === 'number') || (typeof prop === 'string')) {
                element[propName] = prop;
            }
        });
};

const RektDOM = {
    createElement(virtualElement) {
        if (isVirtualText(virtualElement)) {
            return document.createTextNode(virtualElement.text);
        }
        const element = document.createElement(virtualElement.tagName);

        applyProps(element, virtualElement.props);

        virtualElement.children
            .map(RektDOM.createElement)
            .forEach(element.appendChild.bind(element));

        return element;
    },

    render(virtualElement, root) {
        root.appendChild(RektDOM.createElement(virtualElement));
    },
};

export default RektDOM;
