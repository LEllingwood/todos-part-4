import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const Index = () =>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>;

ReactDOM.render(<Index />, document.getElementById('root'));
// the first parameter of the ReactDome.render has to be a component
serviceWorker.unregister();
