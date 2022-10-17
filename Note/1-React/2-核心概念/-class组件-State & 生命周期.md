# class组件 之 State
- 不能直接修改State
- 只能通过 this.setState() 来修改
- state更新是异步的, 通过函数的方式来解决
```ts
this.setState((state,props)=>{return newState})
```
- state 更新会被合并

```ts
import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  // 方法
  // 箭头函数方式 如果传给子组件时, 会导致额外的重新渲染
  tick(){
     this.setState({  date: new Date()  }); // 更新state
  }
  // class fields方式
  tick = () => {
     this.setState({  date: new Date()  }); // 更新state
  }
  
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  // 生命周期
  componentDidMount(){
    // 组件挂载, 在组件已经被渲染到 DOM 中后运行
    this.timerID = setInterval(  () => this.tick(), 1000  );
  }     
  componentDidUpdate(){
    // 更新完毕
  }
  componentWillUnMount(){
    // 组件销毁, 清除定时器
    clearInterval(this.timerID);
  }  
}

ReactDOM.render( <Clock />, document.getElementById('root') );
```