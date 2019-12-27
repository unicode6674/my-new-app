import React from 'react';
// 引入css样式
// require('./PageOne.css');
import './PageOne.css'

class PageOne extends React.Component{
    render(){
        // let mystyle = {
        //     width:'200px',
        //     height:'80px',
        //     backgroundColor:'yellow',
        //     fontSize:'24px',
        //     textAlign:'center'
        // };
        // <div  style={{width:'200px',height:'80px',backgroundColor:'yellow',fontSize:'24px',textAlign:'center'}}>This is PageOne!</div>
        // <div  style={ mystyle }>This is PageOne!</div>

        return(
            <div>
                <div className='mydiv'>This is PageOne!</div>
            </div>
        );
    }
}

export default PageOne;