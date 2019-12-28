import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addCount, reduceCount } from './store/actions/countAction';
import PropTypes from 'prop-types';
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
                <div>
                    <button onClick={()=>this.props.addCount()}>加1</button>
                    {this.props.count}
                    <button onClick={()=>this.props.reduceCount(5)}>减5</button>
                </div>
            </Router>
        );
    }
}


// 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
// 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名
function  mapStateToProps(state) {
    return {
        count: state.countReducer.count
    }
}

function mapActionToProps(dispatch) {
    return {
        addCount: () => dispatch(addCount()),
        reduceCount: (num) => dispatch(reduceCount(num))
    }
}

App.propTypes = {
    count: PropTypes.number.isRequired,
    addCount: PropTypes.func.isRequired,
    reduceCount: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapActionToProps)(App);
