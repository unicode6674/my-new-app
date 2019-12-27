import React from 'react';

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
                <div>page2页面</div>
                <div>{this.state.mytext.name}</div>
                <div>{this.state.mytext.price}</div>
                <div>{this.state.mytext.date}</div>
            </div>
        );
    }
}

export default PageTwo;