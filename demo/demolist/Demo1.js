/**
*
* @title 基本示例
* @description 基本示例
*
*/
import React, { Component } from 'react';
import FormControl from 'bee-form-control';
import SplitArea from '../../src'

class Demo1 extends Component {
    render () {
        return (
            <div>
                <div>
                    <FormControl placeholder='请输入基本信息'/>
                    <FormControl placeholder='请输入基本信息'/>
                    <FormControl placeholder='请输入基本信息'/>
                    <FormControl placeholder='请输入基本信息'/>
                </div>
                <SplitArea>
                    <FormControl placeholder='请输入操作信息'/>
                    <FormControl placeholder='请输入操作信息'/>
                    <FormControl placeholder='请输入操作信息'/>
                    <FormControl placeholder='请输入操作信息'/>
                </SplitArea>
            </div>
        )
    }
}
export default Demo1