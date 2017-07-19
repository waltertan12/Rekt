/* global document */
import Rekt from '../index';

const { RektScript, RektDOM, Diff } = Rekt;

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
            RektScript('li', {}, 'Write a function that applies diffs to the actual DOM'),
            RektScript('li', {}, 'Write (or steal) a JSX parser'),
            RektScript('li', {}, 'Figure out a way to handle event listeners'),
            RektScript('li', {}, 'Write out the life cycle of a component'),
        ),

        RektScript('h3', { style: { color: 'pink' } }, '#getRekt'),
    )
);

const AlteredApp = (
    RektScript('div', { className: 'container-two' },
        RektScript('h1', { className: 'heading' }, 'Rekt?'),
        RektScript('p', { className: 'paragraph'}, 'This! page! is built using an incomplete imitation of React called Rekt!'),
        RektScript('h2', {}, 'Things I\'m working on:'),
        RektScript('ul', { className: 'unorderedListOne' },
            RektScript('li', {}, 'Writing (read, stealing) a simple diff algorithm'),
        ),
        RektScript('h2', {}, 'Things I still need to complete:'),
        RektScript('ul', { className: 'unorderedListTwo' },
            RektScript('li', {}, 'Write a function that applies diffs to the actual DOM'),
            RektScript('li', {}, 'Write (or steal) a JSX parser'),
            RektScript('li', { className: 'li3' }, 'Figure out a way to handle event listeners'),
            RektScript('li', {}, 'asdfadsfasdfasdf'),
        ),

        RektScript('h3', { style: { color: 'blue' } }, '#getRekt'),
    )
);

RektDOM.render(
    App,
    document.getElementById('app'),
);

console.log(App)
console.log(AlteredApp)
console.log(Diff(App, AlteredApp))
