import React from 'react';
require('./PageOne.css');

class PageOne extends React.Component{
    // 页面1 是用来练习样式的
    render(){
        // 引入样式的方法2
        let mystyle={
            width:'400px',
            height:'80px',
            backgroundColor:'pink',
            fontSize:'24px',
            textAlign:'center'
        };

        return(
            <div>
                <div>PageOne</div>
                <div style={{ width:'400px', height:'80px', backgroundColor:'yellow', fontSize:'24px', textAlign:'center', color: 'blue' }}>引入样式的方法1</div>
                <div style={mystyle}>引入样式的方法2</div>
                <div className={'mystyle'}>引入样式的方法3</div>
            </div>
        );
    }
}

export default PageOne;