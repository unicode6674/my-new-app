import React from 'react';
import store from './../../store/index'
// 因为是index 可以简写为  import store from './../../store
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
        console.log(this.state, '121212121');
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
            </div>
        );
    }

    changeInputValue(e){
        console.log(e.target.value);
        const action ={
            type:'changeInput',
            value:e.target.value
        };
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    onClick_addBtn(){
        console.log(this, "54545645646");
        const action = { type:'addItem'};
        store.dispatch(action);
    }

    deleteItem(index){
        console.log(index);
        const action = {
            type:'deleteItem',
            index
        };
        store.dispatch(action)
    }
}

export default PageFour;