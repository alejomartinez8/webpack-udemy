import HelloWorldButton from './components/hellow-world-button/hello-world-button.js';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
const heading2 = new Heading();

heading.render();
heading2.render();
helloWorldButton.render();

console.log(process.env.NODE_ENV, 'mode');

helloWorldButton.methodDoesNotExist();
