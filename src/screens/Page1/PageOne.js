import React from 'react';
// 引入css样式
// require('./PageOne.css');
import './PageOne.css'
import {Link} from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react';

class PageOne extends React.Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentWillMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    renderH(){
        const element = <h1 className="foo">这是什么</h1>;
        return element;
    }

    render(){
        //  css 样式写的位置
        // let mystyle = {
        //     width:'200px',
        //     height:'80px',
        //     backgroundColor:'yellow',
        //     fontSize:'24px',
        //     textAlign:'center'
        // };
        // <div  style={{width:'200px',height:'80px',backgroundColor:'yellow',fontSize:'24px',textAlign:'center'}}>This is PageOne!</div>
        // <div  style={ mystyle }>This is PageOne!</div>

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
                <div className='mydiv'>This is PageOne!</div>
                <div id='jsid'>{this.renderH()}</div>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default PageOne;