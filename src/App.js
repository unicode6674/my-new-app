import React, { Component } from 'react';
import './App.css';
// 页面
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Home from './screens/Home/Home';
import PageOne from './screens/Page1/PageOne';
import PageTwo from './screens/Page2/PageTwo';
import PageThree from './screens/Page3/PageThree';

/* 组件*/
// import View from './components/view/View';


/* 通过类的方式来声明*/
class App extends Component {
    constructor(props) { //构造函数
        super(props);
        this.state = {
            text : 'This is TEXT!'
        }
    }
    /*虚拟dom */
    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Link to="/" style={{color:'#ff0000'}}><div>点击跳转到Home</div></Link>
                    <Route path="/PageOne" component={PageOne} />
                    <Link to="/PageOne/" style={{color:'#ff0000'}}><div>点击跳转到PageOne</div></Link>
                    <Route path="/PageTwo" component={PageTwo} />
                    <Link to="/PageTwo/" style={{color:'#ff0000'}}><div>点击跳转到PageTwo</div></Link>
                    <Route path="/PageThree" component={PageThree} />
                    <Link to="/PageThree/" style={{color:'#ff0000'}}><div>点击跳转到PageThree</div></Link>
                </div>
            </Router>
        );
    }
}

export default App;
