import {Router, Route, hashHistory,IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import App from '../component/app'//主页面
import Home from 'component/home/index'
import Tab from 'component/tab/index'
import About from 'component/about/index'
/*import Home from 'bundle?lazy!component/home/index'
import Tab from 'bundle?lazy!component/tab/index'
import About from 'bundle?lazy!component/about/index'*/


class RouterContent extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRedirect to="/home" />
              <Route path="/home" component={Home}/>
              <Route path="/tab" component={Tab}/>
              <Route path="/about" component={About}/>
          </Route>
        </Router>
    )
  }
}
export default RouterContent;