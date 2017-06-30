require('babel-register')();

const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');

const exposedProperties = ['window', 'navigator', 'document'];

global.document = window.document;
global.window = window;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;
