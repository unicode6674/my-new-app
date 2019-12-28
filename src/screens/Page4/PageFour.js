import React from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class PageTwo extends React.Component{
    constructor(props){ //构造函数
        super(props);
        this.state = {
            mytext : '',
        }
    }

    render(){

        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((numbers) =>
            <li key={numbers.toString()}>{numbers}</li>
        );
        // 使用 map() 方法遍历数组生成了一个 1 到 5 的数字列表:

        return(
            <div>
                <Segment><div>This is Home!</div></Segment>
                <Menu>
                    <Menu.Item>
                        <Link to="/PageOne/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageOne</div>
                        </Link>
                        <Link to="/PageTwo/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageTwo</div>
                        </Link>
                        <Link to="/PageThree/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageThree</div>
                        </Link>
                        <Link to="/PageFour/" style={{color:'#ff0000'}}>
                            <div>点击跳转到PageFour</div>
                        </Link>
                    </Menu.Item>
                </Menu>
                <div>page4页面</div>
                <ul>{listItems}</ul>

            </div>
        );
    }
}

export default PageTwo;