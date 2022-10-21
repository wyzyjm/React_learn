# Redux
- 一个js容器,进行全局状态管理


## 三大核心
1. 单一数据源
2. State 是只读的
   - 想要修改state, 必须触发action, action就是一个普通对象
   - 触发修改: `stroe.dispatch( {type:'add', index:1} )`
3. 使用纯函数来执行修改
   - reducer: 接收先前的 state 和 action, 并返回一个新的state