/* global document */
import Rekt from '../index';

const { HyperScript, RektDOM } = Rekt;

const App = (
    HyperScript('div', { className: 'container' },
        HyperScript('h1', {}, 'Rekt'),
        HyperScript('p', {}, 'This page is built using an incomplete imitation of React called Rekt!'),
        HyperScript('h2', {}, 'Things I\'m working on:'),
        HyperScript('ul', {},
            HyperScript('li', {}, 'Writing (read, stealing) a simple diff algorithm'),
        ),
        HyperScript('h2', {}, 'Things I still need to complete:'),
        HyperScript('ul', {},
            HyperScript('li', {}, 'Write a function that applies diffs to the actual DOM'),
            HyperScript('li', {}, 'Write (or steal) a JSX parser'),
            HyperScript('li', {}, 'Figure out a way to handle event listeners'),
            HyperScript('li', {}, 'Write out the life cycle of a component')
        ),

        HyperScript('h3', { style: { color: 'pink' } }, '#getRekt')
    )
);

RektDOM.render(
    App,
    document.getElementById('app'),
);
