import React from 'react';
require('./PageOne.scss');

class PageOne extends React.Component{
    // 页面1 是用来练习样式的
    constructor(props){
        super(props);     //继承关键字
        this.state={
            value:123 ,   //设置默认值
        };
        this.reduction = this.reduction.bind(this);
    };


    render(){
        // 引入样式的方法2
        let mystyle={
            width:'400px',
            height:'80px',
            lineHeight: '80px',
            backgroundColor:'pink',
            fontSize:'24px',
            textAlign:'center'
        };

        return(
            <div>
                <div className={'page-title'}>PageOne</div>
                <div style={{ width:'400px', height:'80px', lineHeight: '80px',backgroundColor:'yellow', fontSize:'24px', textAlign:'center', color: 'blue' }}>引入样式的方法1</div>
                <div style={mystyle}>引入样式的方法2</div>
                <div className={'my-style'}>
                    <span>引入样式的方法3</span>
                    <span className={'child'}>scss测试</span>
                </div>
                <div>
                    <div>属性的双向绑定</div>
                    <input value={this.state.value}  type={'number'} onChange={(event)=>{this.change(event)}}/>
                    <p>{this.state.value}</p>
                    <div style={{cursor:"pointer"}} onClick={this.dianJi}>点击一下value＋1</div>
                    <div style={{cursor:"pointer"}} onClick={this.reduction}>点击一下value - 1</div>
                    <div style={{cursor:"pointer"}} onClick={this.reduction5.bind(this)}>点击一下value - 5</div>
                </div>
            </div>
        );
    }
    reduction5() {
        this.setState({value: Number(this.state.value) - 5})
    }

    change(e) {
        console.log(e.target.value);    //获取修改后的值
        this.setState({
            value: e.target.value
        })
    };

    dianJi = () => {
       this.setState({value: Number(this.state.value) + 1})
    };

    reduction() {
        this.setState({value: Number(this.state.value) - 1})
    };


}

export default PageOne;