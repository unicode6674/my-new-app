import React, { Component } from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';


// 引入各个页面
import Home from './../src/screens/Home/Home'
import PageOne from './../src/screens/PageOne/PageOne'
import PageTwo from './../src/screens/PageTwo/PageTwo'
import PageThree from './../src/screens/PageThree/PageThree'
import PageFour from './../src/screens/PageFour/PageFour'
import PageFive from "./screens/PageFive/PageFive";


class App extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      text : 'This is TEXT!',
      num:25
    }
  }

  /*虚拟dom */
  render() {
    return (
        <Router>
            <Nav></Nav>
            <div id={'content'}>
                <Route exact path="/" component={Home} />
                <Route path="/PageOne/:id" component={PageOne} />
                <Route path="/PageTwo" component={PageTwo} />
                <Route path="/PageThree" component={PageThree} />
                <Route path="/PageFour" component={PageFour} />
                <Route path="/PageFive" component={PageFive} />
            </div>
        </Router>
        );
     }
  }

export default App;
