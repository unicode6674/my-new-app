import React from 'react';
// 引入css样式
// require('./PageOne.css');
import './PageOne.css'
import {Link} from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react';

class PageOne extends React.Component{
    render(){
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
                    </Menu.Item>
                </Menu>
                <div className='mydiv'>This is PageOne!</div>
            </div>
        );
    }
}

export default PageOne;