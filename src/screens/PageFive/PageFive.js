import React from 'react';
// 这里相对于pagefour 增加了引入  PageFiveUI  删除了antd 组件的引入  然后就是render 中的全部换成引入的ui组件
import PageFiveUI from './PageFiveUI'
import store from "../../store";
import {addItemAction, changeInputAction, deleteItemAction} from "../../store/actions/countAction";

class PageFive extends React.Component{
    // 页面
    constructor(props){
        super(props);     //继承关键字
        this.state = store.getState();
        this.changeInputValue= this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    };

    render(){
        return(
            <PageFiveUI
                inputValue={this.state.countReducer.inputValue}
                list={this.state.countReducer.list}
                changeInputValue={this.changeInputValue}
                addButton={this.onClick_addBtn}
                deleteItem={this.deleteItem}
            />
            // 将jsx 复制发哦ui组件中的render方法中去
            //  事件和状态通过组件传参的方式传递到ui组件中， 而ui组件通过props调用事件和取用参数
        );
    }

    // 向输入框输入内容
    changeInputValue(e){
        const action =  changeInputAction(e.target.value);
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
        const action = deleteItemAction(index);
        store.dispatch(action)
    }
}

export default PageFive;