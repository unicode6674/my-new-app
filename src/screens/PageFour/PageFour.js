import React from 'react';
import store from './../../store/index'
import axios from 'axios'
// 因为是index 可以简写为  import store from './../../store
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './../../store/actionTypes.js';
// 添加引入的方法后的绗棉的actionTypes就可以不引入了， 直接在countAction中引入就行了
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from "./../../store/actions/countAction";
import { Input, Button, List } from 'antd'

class PageFour extends React.Component{
    // 页面
    constructor(props){
        super(props);     //继承关键字
        this.state = store.getState();
        this.changeInputValue= this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    };

    // 生命周期
    componentWillMount(){
        console.log('生命周期');
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8081/json').then((res)=>{
            console.log(res);
            const data = res;
            const action = getListAction(data);
            store.dispatch(action);
        })
    }

    render(){
        return(
            <div>
                <div className={'page-title'}> PageFour页</div>
                <div>练习Redux</div>
                <div>
                    <Input
                        placeholder={'输入事情'}
                        style={{ width:'250px', marginRight:'10px'}}
                        value={this.state.countReducer.inputValue}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary" onClick={() => this.onClick_addBtn()}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        dataSource={this.state.countReducer.list}
                        renderItem={(item, index)=>(<List.Item style={{cursor:"pointer"}} onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
                <div>
                    <div style={{fontSize: '20px', color: 'red'}}>请求拿回来数据写入store</div>
                    <div>
                        <div>{this.state.countReducer.arrayList.name}</div>
                        <div>{this.state.countReducer.arrayList.price}</div>
                        <div>{this.state.countReducer.arrayList.date}</div>
                    </div>
                </div>
            </div>
        );
    }

    // 向输入框输入内容
    changeInputValue(e){
        // const action ={
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // };
        // 引入后 changeInputAction
        const action =  changeInputAction(e.target.value);
        // action就创建好了，但是要通过dispatch()方法传递给store。我们在action下面再加入一句代码。
        store.dispatch(action)
    }

    // 设置本页面的state
    storeChange(){
        this.setState(store.getState())
    }

    // 添加内容
    onClick_addBtn(){
        const action = addItemAction();
        store.dispatch(action);
    }

    // 删除内容
    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // };
        const action = deleteItemAction(index);
        store.dispatch(action)
    }
}

export default PageFour;