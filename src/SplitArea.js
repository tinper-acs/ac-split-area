import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    clsfix:PropTypes.string,
    open:PropTypes.bool,//打开关闭
    ctn:PropTypes.node,//内容
    defaultOpen:PropTypes.bool,//默认展开收起
    openChange:PropTypes.func,//展开收起
};

const defaultProps = {
    clsfix:'ac-split-area',
    defaultOpen:false,
    ctn:'操作信息',
    openChange:()=>{}
};

class SplitArea extends Component {

    constructor(props){
        super(props);
        this.state={
            open:props.open==undefined?props.defaultOpen:props.open
        }
    }
    
    

    click=()=>{
        this.setState({
            open:!this.state.open
        })
        this.props.openChange(!this.state.open)
    }
    static getDerivedStateFromProps(nextProps) {
        if('open' in nextProps){
            return {
                open:nextProps.open
            }
        }
    }

    // componentWillReceiveProps(nextProps){
    //     if('open' in nextProps){
    //         console.log(nextProps.open)
    //         this.setState({
    //             open:nextProps.open
    //         })
    //     }
    // }

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