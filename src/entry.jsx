import React from 'react'
import {render} from 'react-dom';
import 'babel-polyfill';
import {Provider} from 'react-redux';

let rootDocument=document.getElementById('app');
import {store} from './redux/store/store'
import RouterContent from './router'
render(
  <Provider store={store}>
    <RouterContent/>
  </Provider>
  ,rootDocument);
