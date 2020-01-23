import React, {Component } from 'react';
import {Redirect} from 'react-router-dom';
import logo from './logo.svg';
import MainContainer from './components/Main/main_container.js';
import {BrowserRouter, Route, withRouter} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './REDUX/Redux_Store.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Provider store ={store}>

        <Route path='/main'  render= { ()=> {
          return  <React.Suspense>
              <MainContainer />
              </React.Suspense>
        }} />
      </Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
