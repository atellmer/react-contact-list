import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './containers/app';

const root = document.querySelector('#root');
	
render(<App/>, root);