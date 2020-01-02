

// 定义初始化的数据，根据实际数据即可
const initializeState = {
    inputValue: '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时',
        '下午茶',
        '晚上开始睡觉'
    ]
};

// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state
// 并且抛出这个countReducer
export default function countReducer(state = initializeState,action) {
    console.log(action);
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState
    }

    //state值只能传递，不能使用
    if(action.type === 'addItem' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.inputValue){
            newState.list.push(newState.inputValue);  //push新的内容到列表中去
            newState.inputValue = '';
            return newState
        }
    }
    //state值只能传递，不能使用
    if(action.type === 'deleteItem' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)  //删除数组中对应的值
        return newState
    }

    return state;
}