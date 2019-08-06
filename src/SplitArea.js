import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    clsfix:PropTypes.string,
    open:PropTypes.bool,
    ctn:PropTypes.node
};

const defaultProps = {
    clsfix:'ac-split-area',
    open:false,
    ctn:'操作信息'
};

class SplitArea extends Component {

    constructor(props){
        super(props);
        this.state={
            open:props.open||false
        }
    }

    componentWillReceiveProps(nextProps){
        if('open' in nextProps){
            this.setState({
                open:nextProps.open
            })
        }
    }

    click=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    render(){
        let { children,clsfix,ctn } = this.props;
        let { open } = this.state;
        return (
            <div className={`${clsfix}`}>
                <div onClick={this.click} className={`${clsfix}-left`}>
                    <span className={`${clsfix}-left-text`}>{ctn}</span>
                    <span className={`${clsfix}-left-line`}>
                        <span className={`${clsfix}-left-line-inner`}></span>
                    </span>
                </div>
                <div className={`${clsfix}-ctn ${open?'open':''}`}>
                        {open?children:''}
                </div>            
            </div>
        )
    }
};

SplitArea.propTypes = propTypes;
SplitArea.defaultProps = defaultProps;

export default SplitArea;