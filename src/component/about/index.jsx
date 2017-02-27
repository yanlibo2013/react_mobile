import React, {Component} from 'react'
import {connect} from 'react-redux'

import './index.less'//样式

class About extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
        let {dispatch}=this.props;

    }
    render() {
        return (
            <section id="discriptionCon">
                <section>
                    <h2 className="fund-info"><span className="fund-name">嘉实活期宝</span>
                        <div className="tc"><span className="code">000464</span><span className="type">货币型</span></div>
                    </h2>
                </section>
                <section className="main-info">
                    <div className="infoUnityield-box">
                        <p className="value red">1.4821</p>
                        <p className="des gray">每万份收益（2015-06-17）</p>
                    </div>
                    <div className="infoYearlyroe-box">
                        <p className="value red">4.1080%</p>
                        <p className="des gray">七日年化收益（2015-06-17）</p>
                    </div>
                </section>
            </section>
        )
    }
}
export default connect(state=>({

}))(About)

