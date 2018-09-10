import React from 'react';
import { render } from 'react-dom';

// - Root Component | HOT Loaded
import ClientApp from './components/ClientApp';

// - Root element in HTML | Bootstrap to this element
const ROOT_ELEMENT = document.getElementById('app');

render(<ClientApp />, ROOT_ELEMENT);
