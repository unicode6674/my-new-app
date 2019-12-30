import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'

class Login extends React.Component {

    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:'',
            password:'',
        };
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this);  // this 绑定方法1
    }

    userChange(e){
        this.setState({ user : e.target.value });
    }

    passwordChange(e){
        this.setState({ password : e.target.value });
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let text = {user:this.state.user,password:this.state.password} //获取数据
        console.log(text);
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8081/password`,{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json()).then(
            data => {
                if(data.success) window.alert('验证成功，欢迎登录');
                else window.alert('验证失败，用户名或密码错误')
            }
        )
    }

    //  重置事件
    handleClick(e, num) {
        e.preventDefault();
        console.log('链接被点击', this, e, num);
        this.setState({ password :'',user : ''});
        console.log(this.state.user, this.state.password)
    }

    // this 绑定方法2
    // handleClick = (e) => {
    //     e.preventDefault();
    //     console.log('链接被点击', this);
    //     this.setState({ password :'',user : ''});
    // }

    // this 绑定方法3
    // <Button content='重置' onClick={(e) => this.handleClick(e)} style={{marginLeft:'20px'}}/>

    // 方法传值  方法2  事件的对象放最后
    // <Button onClick={this.handleClick.bind(this, '传值')}>Delete Row</Button>

    render(){
        return(
            <div style={{margin:'10px'}}>
                <Segment style={{textAlign:'center'}}>
                    <h2>请登录{this.props.name}</h2>
                    <Input id='user' placeholder='用户名' style={{marginBottom:'10px'}}  onChange={this.userChange}/><br/>
                    <Input id='password' type='password' placeholder='密码' style={{marginBottom:'10px'}} onChange={this.passwordChange}/>
                    <br/>
                    <Button primary content='登录' style={{marginBottom:'10px'}}   onClick={this.submit}/>
                    <Button content='重置' onClick={(e) => this.handleClick(e, '方法传值')} style={{marginLeft:'20px'}}/>
                </Segment>
            </div>
        )
    }
}

export default Login;