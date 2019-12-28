import React from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import Greeting from "../../components/greeting/Greeting";

class PageThree extends React.Component{

    constructor(props){ //构造函数
        super(props);
        this.state = {
            isLoggedIn: false,
            name: '我是父组件',
            msg: '父组件传值给子组件',
            childrenMsg: ''
        }
    }

    // 子组件方法
    getChildrenMsg = (result, msg) => {
        console.log(result, msg);
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            childrenMsg: msg
        })
    };

    getLoginOr = (result, ttt) => {
        console.log(result, ttt);
        this.setState({
            isLoggedIn: ttt
        })
    };


    render(){
        return(
            <div>
                <Segment><div>This is Home!</div></Segment>
                <Menu>
                    <Menu.Item>
                        <Link to="/PageOne/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageOne</div>
                        </Link>
                        <Link to="/PageTwo/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageTwo</div>
                        </Link>
                        <Link to="/PageThree/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageThree</div>
                        </Link>
                        <Link to="/PageFour/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageFour</div>
                        </Link>
                    </Menu.Item>
                </Menu>
                <div>This is PageThree!</div>
                <div>子组件start</div>
                <Greeting isLoggedIn={this.state.isLoggedIn}  parent={ this } />
                <div>子组件end</div>
                <h3>子组件传来的值为：{ this.state.childrenMsg }</h3>
                <Segment style={{textAlign:'center',width:'60%',margin:'10px auto'}}>文章一——长恨歌</Segment>
                <Segment style={{textAlign:'center',margin:'10px auto'}}>
                    汉皇重色思倾国，御宇多年求不得。<br/>
                    杨家有女初长成，养在深闺人未识。<br/>
                    天生丽质难自弃，一朝选在君王侧。<br/>
                    回眸一笑百媚生，六宫粉黛无颜色。<br/>
                    春寒赐浴华清池，温泉水滑洗凝脂。<br/>
                    侍儿扶起娇无力，始是新承恩泽时。<br/>
                </Segment>
            </div>
        );
    }
}

export default PageThree;