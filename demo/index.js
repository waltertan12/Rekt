/* global document */
import Rekt from '../index';

const { RektScript, RektDOM, Diff, Reconcile } = Rekt;

const App = (
    RektScript('div', { className: 'container' },
        RektScript('h1', {}, 'Rekt'),
        RektScript('p', {}, 'This page is built using an incomplete imitation of React called Rekt!'),
        RektScript('h2', {}, 'Things I\'m working on:'),
        RektScript('ul', {},
            RektScript('li', {}, 'Writing (read, stealing) a simple diff algorithm'),
        ),
        RektScript('h2', {}, 'Things I still need to complete:'),
        RektScript('ul', {},
            RektScript('li', { key: 0 }, 'Write a function that applies diffs to the actual DOM'),
            RektScript('li', { key: 1 }, 'Write (or steal) a JSX parser'),
            RektScript('li', { key: 2 }, 'Figure out a way to handle event listeners'),
            RektScript('li', { key: 3 }, 'Write out the life cycle of a component'),
        ),

        RektScript('h3', { style: { color: 'pink' } }, '#getRekt'),
    )
);

const nextApp = (
    RektScript('div', { className: 'container' },
        RektScript('h1', { }, 'Rekt?'),
        RektScript('p', { }, 'This! page! is built using an incomplete imitation of React called Rekt!'),
        RektScript('h2', { }, 'Things I\'m working on:'),
        RektScript('ul', { },
            RektScript('li', { }, 'Writing (read, stealing) a simple diff algorithm'),
        ),
        RektScript('h2', {}, 'Things I still need to complete:'),
        RektScript('ul', { },
            RektScript('li', { key: 0 }, 'Write a function that applies diffs to the actual DOM'),
            RektScript('li', { key: 1 }, 'Write (or steal) a JSX parser'),
            RektScript('li', { key: 3 }, 'Write out the life cycle of a component'),
            RektScript('li', { key: 2 }, 'Figure out a way to handle event listeners'),
        ),

        RektScript('h3', { style: { color: 'blue' } }, '#getRekt'),
    )
);

const root = document.getElementById('app');
const patches = Diff(App, nextApp);
const appRoot = RektDOM.mount(App,root);

Reconcile(appRoot, patches);

