import React from 'react';
import Login from './../../components/Login'

class PageThree extends React.Component{
    constructor(props) { //构造函数
        super(props);
        this.state = {
            text : 'This is page3!',
            name: 110,
            childrenMsg: ''
        }
    }

    /*
     暴露给子组件方法
    */
    getChildrenMsg = (result, msg) => {
        console.log(result, msg);
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            childrenMsg: msg
        })
    };
    render(){
        return(
            <div>
                <div className={'page-title'}>pageThree</div>
                <div>{this.state.childrenMsg}</div>
                <Login parent={ this } name={this.state.name} text={this.state.text}></Login>
            </div>
        );
    }
}

export default PageThree;