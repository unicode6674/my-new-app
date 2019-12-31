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
                // 将请求的数据放入状态里
                this.setState({mytext:JSON.parse(data)})
            }
        )
    }

    // 生命周期
    componentWillMount(){
        this.getDatas();
    }
    render(){
        return(
            <div>
                <div className={'page-title'}>PageTwo页，练习请求</div>
                <div style={{height:'100px', backgroundColor: "#189574"}}>
                    <div>{this.state.mytext.name}</div>
                    <div>{this.state.mytext.price}</div>
                    <div>{this.state.mytext.date}</div>
                </div>
                <div>上面是发请求拿数据的显示的框</div>

            </div>
        );
    }
}

export default PageTwo;