import React from 'react';
import {Link} from "react-router-dom";
require('./Nav.scss');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:25
        };
    }

    render(){
        return(
            <div id={'nav'}>
                <Link to="/"><div>Home</div></Link>
                <Link to={/PageOne/+this.state.id}><div>PageOne</div></Link>
                <Link to="/PageTwo/"><div>PageTwo</div></Link>
                <Link to="/PageThree/"><div>PageThree</div></Link>
                <Link to="/PageFour/"><div>PageFour</div></Link>
            </div>
        )
    }
}
export default Nav;