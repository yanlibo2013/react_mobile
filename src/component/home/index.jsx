import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getDevicetype} from 'REDUX/action/common'
import './index.less'//样式

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
        let {dispatch}=this.props;
        dispatch(getDevicetype());

    }
    render() {
        return (
            <div className="home">
               <h1>henry 2019!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
            </div>
        )
    }
}
export default connect(state=>({

}))(Home)

