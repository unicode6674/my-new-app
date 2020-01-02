import React from 'react';
import { Input, Button, List } from 'antd'

const PageFiveUIno = (props) => {
    return(
        <div>
            <div className={'page-title'}> PageFive页</div>
            <div style={{fontSize:'20px', fontWeight: 500, color: 'red'}}>练习--拆分UI组件</div>
            <div>业务逻辑和ui组件分离</div>
            <div>
                <div>
                    <Input
                        placeholder={'输入事情'}
                        style={{ width:'250px', marginRight:'10px'}}
                        value={props.inputValue}
                        onChange={props.changeInputValue}
                    />
                    {/* 上面重props中取值， 和调用事件 */}
                    <Button type="primary" onClick={props.addButton}>增加</Button>
                    {/* 按钮通过props 调用addButton方法   */}
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        dataSource={props.list}
                        renderItem={(item,index)=>(<List.Item style={{cursor:"pointer"}}  key={index}  onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                    />
                    {/* 上面onClick方法中的箭头函数中括号中不能写index， 让后面传参直接去前面拿 */}
                </div>
            </div>
        </div>
    );
}

export default PageFiveUIno;