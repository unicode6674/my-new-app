import React from 'react';
import {Link} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div id={'nav'}>
                <Link to="/" style={{color:'#ff0000'}}>
                    <div>点击跳转到Home</div>
                </Link>
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
            </div>
        )
    }
}
export default Nav;