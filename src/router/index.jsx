import {Router, Route, hashHistory,IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import App from '../component/app';//主页面
import Home from '../component/home';
import Tab from '../component/tab'
class RouterContent extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home}/>
              <Route path="/tab" component={Tab}/>
          </Route>
        </Router>
    )
  }
}
export default RouterContent;