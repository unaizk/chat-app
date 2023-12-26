

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = document.querySelector('#root');

// Use createRoot to render your application
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
