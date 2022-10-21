# Redux组成

1. State 状态
    - http请求数据: 服务端的数据
    - UI state: 决定UI怎么显示
    - APP state: 路由信息
2. Action 事件
    - action 是 一个对象
    - 必须有个 **type** 属性 
    - 其它结构随意定义
```js
{
    type:"DO Something",
    info:{...},
    isLoading:true
}
// 项目中常用一个函数来创建 action
function addAction(params){
    return {
        type:'add',
        ...params
    }
}
```

3. Reducer
    - 本质就是一个 函数, 响应action, 把state 发送给 store
```ts
const initState = {}    // 初始化数据
const rootReducer = (state = initState, action) => {
    return {} // 必须有返回值, store才能接收到数据
}

```

4. Store
    - 维持应用的 state
    - getState(): 获取state
    - dispatch(): 发送action, 修改state
    - subscribe(): 注册监听
    - subscribe()返回值: 注销监听
```ts
import {createStore} from 'Redux'

const Store = createStore( `reducer函数` )

```