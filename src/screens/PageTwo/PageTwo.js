import React from 'react';
import { Input, Button } from "antd";
require('./PageTwo.scss')


class PageTwo extends React.Component{
    constructor(props){ //构造函数
        super(props);
        this.state = {
            mytext : '',
            param: 65
        };
        this.increaseQty2 = this.increaseQty2.bind(this);
        this.increaseQty3 = this.increaseQty3.bind(this, this.state.param);
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
                <div>antD 练习</div>
                <div className={'antd-div'}>
                    <Input className={'input-box'} placeholder={'antd输入'}></Input>
                    <Button className={'button-div'}>确认添加</Button>
                </div>
                <div>事件的绑定和传参</div>
                <div className={'on-click'}>
                    <p>第一种方法</p>
                    <p>{'onClick={this.increaseQty.bind(this)}'}</p>
                    <p>{'onClick={this.increaseQty.bind(this, 25)}'}</p>
                    <Button className={'button-div'} onClick={this.increaseQty.bind(this)}>绑定</Button>
                    <Button className={'button-div'} onClick={this.increaseQty.bind(this, 25)}>传参</Button>
                </div>

                <div className={'on-click'}>
                    <p>第二种方法</p>
                    <p>{'this.increaseQty = this.increaseQty.bind(this)}'}</p>
                    <p>{'this.increaseQty = this.increaseQty.bind(this, "45454")'}</p>
                    <Button className={'button-div'} onClick={this.increaseQty2}>2绑定</Button>
                    <Button className={'button-div'} onClick={this.increaseQty3}>3传参</Button>
                </div>

                <div className={'on-click'}>
                    <p>第三种方法</p>
                    <p>{'onClick={() => this.increaseQty()}'}</p>
                    <p>{"onClick={() => this.increaseQty(click me)}"}</p>
                    <Button className={'button-div'} onClick={() => this.increaseQty4()}>4绑定</Button>
                    <Button className={'button-div'} onClick={() => this.increaseQty5('click me', this)}>5传参</Button>
                </div>

            </div>
        );
    }

    // 测试事件绑定和传参
    increaseQty($num, e){
        console.log($num, e);  // 参数放前面
        if ($num && e){
            alert('传参'+$num);
        }else {
            alert("绑定")
        }
    }

    increaseQty2(){
        alert("2绑定")
    }

    increaseQty3($num, e){
        console.log($num, e);  // 参数放前面
        alert('3传参'+$num);
    }

    increaseQty4(){
        alert('4传参');
    }

    increaseQty5($num, e){
        console.log($num, e);  // 参数放前面
        alert('5传参'+$num);
    }




}

export default PageTwo;