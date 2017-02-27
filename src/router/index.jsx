import {Router, Route, hashHistory,IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import App from 'component/app'//主页面

const Home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('component/home').default)
    },'home')
}


const Tab = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('component/tab').default)
    },'tab')
}



const About = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('component/about').default)
    },'about')
}

class RouterContent extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRedirect to="/home" />
              <Route path="/home" getComponent={Home}/>
              <Route path="/tab" getComponent={Tab}/>
              <Route path="/about" getComponent={About}/>
          </Route>
        </Router>
    )
  }
}
export default RouterContent;