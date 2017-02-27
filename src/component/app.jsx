import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './app.less'
class App extends Component {
    static propTypes = {
        children: PropTypes.element
    };
    componentWillMount(){
        /*let {dispatch}=this.props;
         dispatch(action) 触发action//*/
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default connect(state=>({
    /*system:state.system,
     loginModal:state.loginModal,
     navBar: state.navBar*/
}))(App);