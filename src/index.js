import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";


import "./index.css";
import App from "./App";
import reducer from "./reducer";

const store = createStore(reducer);
 
const Index = () =>{
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    < Route render={props => <App path={props.location.pathname}/>} />
    </BrowserRouter>
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();


// const Index = () =>{
//   return <Provider store={store}>
//       <App />
//   </Provider>
// }
// ReactDOM.render(
// <BrowserRouter basename={process.env.PUBLIC_URL}>
//   <Index />
// </BrowserRouter>,
// document.getElementById("root")
// );
// serviceWorker.unregister();