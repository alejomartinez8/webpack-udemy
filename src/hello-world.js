import HelloWorldButton from './components/hellow-world-button/hello-world-button.js';
import Heading from './components/heading/heading';
import React from 'react';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render('hello world');
helloWorldButton.render();

console.log(process.env.NODE_ENV, 'mode');

helloWorldButton.methodDoesNotExist();
