import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from './Components/Login'
import Register from './Components/Register'
import * as serviceWorker from './serviceWorker';
import NavBar from './Components/NavBar';
import {BrowserRouter,Route} from 'react-router-dom';


import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

import {Provider } from 'react-redux'

const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Users" component={Login}/>
      <Route exact path="/Register" component={Register}/> 
      <Route exact path="/Login" component={Login}/> 
    </div>
    </BrowserRouter>
</Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
