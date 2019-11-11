import React, {Component} from 'react';
import {render, hydrate, findDOMNode} from 'react-dom';
import App from '../common/home';
console.log('++++++++++++++++++++++++++++++++++')
// render(<App />, document.getElementById('content'));
hydrate(<App />, document.getElementById('content'));
