import React, { Component } from 'react';
import './App.css';
// 页面
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import PageOne from './screens/Page1/PageOne';
import PageTwo from './screens/Page2/PageTwo';
import PageThree from './screens/Page3/PageThree';
import PageFour from './screens/Page4/PageFour';
import View from './components/view/View'

/* 组件*/
// import View from './components/view/View';


/* 通过类的方式来声明*/
class App extends Component {
    constructor(props) { //构造函数
        super(props);
        this.state = {
            text : 'This is TEXT!',
            propss:25
        }
    }
    /*虚拟dom */
    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/PageOne" component={PageOne} />
                    <Route path="/PageTwo" component={PageTwo} />
                    <Route path="/PageThree" component={PageThree} />
                    <Route path="/PageFour" component={PageFour} />
                </div>
                <View name={this.state.propss}></View>
            </Router>
        );
    }
}

export default App;
