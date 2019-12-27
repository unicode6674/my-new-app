import React from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class PageTwo extends React.Component{
    constructor(props){ //构造函数
        super(props);
        this.state = {
            mytext : '',
        }
    }

    getDatas(){ //请求数据函数
        fetch(`http://127.0.0.1:8081/json`,{
            method: 'GET'
        }).then(res => res.text()).then(
            data => {
                this.setState({mytext:JSON.parse(data)})
            }
        )
    }

    componentWillMount(){
        this.getDatas();
    }
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
                    </Menu.Item>
                </Menu>
                <div>page2页面</div>
                <div>{this.state.mytext.name}</div>
                <div>{this.state.mytext.price}</div>
                <div>{this.state.mytext.date}</div>
            </div>
        );
    }
}

export default PageTwo;