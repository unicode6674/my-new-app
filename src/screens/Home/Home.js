import React from 'react';
import {Link} from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react';

class Home extends React.Component{
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
            </div>
        );
    }
}

export default Home;