import React from 'react';

class Greeting extends React.Component {

    constructor(props) {  //构造函数
        super(props);
        this.state = {
            isLoggedIn: false,
            name: '我是子组件',
            msg: '子组件传值给父组件-------------'
        };
        this.UserGreeting = this.UserGreeting.bind(this);
        this.GuestGreeting = this.GuestGreeting.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);


    }

    // 登录
    handleLoginClick() {
        this.setState({isLoggedIn: true});
        this.props.parent.getLoginOr(this, this.state.isLoggedIn)
    }

    // 退出
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        this.props.parent.getLoginOr(this, this.state.isLoggedIn)
    }

    UserGreeting(props) {
        return <h1>欢迎回来!</h1>;
    }

    GuestGreeting(props) {
        return <h1>请先注册。</h1>;
    }

    //  三目运算最后调用的方法this.UserGreeting()小括号fun()

    toParent = () => {
        // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
        this.props.parent.getChildrenMsg(this, this.state.msg)
    };



    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>登陆</button>
        } else {
            button =  <button onClick={this.handleLoginClick}>退出</button>
        }

        return(
            <div style={{margin:'10px'}}>
                {this.props.isLoggedIn?this.UserGreeting():this.GuestGreeting()}
                {button}
                <button onClick={this.toParent}>子组件传入给父组件</button>
            </div>
        )
    }
}
export default Greeting;