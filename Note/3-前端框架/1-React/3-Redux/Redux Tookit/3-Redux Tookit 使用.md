
## 快速使用 Redux toolkit

## 概要 
1. `configureStore` 创建 Store
2. `<Provider>` 提供给 React 
3. `createSlice` 创建切片
4. `useSelector/useDispatch` 获取/修改 store中的值

## 具体使用
1. 创建 Store  **app/store.js**
```ts
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
	reducer: {}, // 两种方式, 函数或 对象时会自动调用combineReducers 函数, 但只有一级可以, 嵌套需要自己调用combineReducers 
})
// 推断 the `RootState` and `AppDispatch` 类型 from the store itself
export type RootState = ReturnType<typeof store.getState>
// 推断类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

2. React 引入store **index.ts**
```ts
import { store } from './app/store'
import { Provider } from 'react-redux'
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
```

3. 创建 状态切片 **features/counter/counterSlice.js**
```ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',	// 切片标识
  initialState,		// 初始值
  // reducer函数 来定义如何更新状态
  reducers: {
    increment: (state) => {
      state.value += 1	      // Redux Toolkit 允许编写 "mutating" 逻辑.  实际上没有改变状态, 因为使用了Immer 
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// 将 reducer函数 暴露出去
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

4. 将切片添加到 Store中 **app/store.js**
```ts
// ...
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
// ...
```

5. 在React组件中 使用 Redux状态 的 操作 **features/counter/Counter.js**
> 
```ts
import React from 'react'
import type { RootState } from '../../app/store'		// 类型
import { useSelector, useDispatch } from 'react-redux'	// hooks
import { decrement, increment } from './counterSlice'	// 引入更新函数

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)	// 从store中读取 data
  const dispatch = useDispatch()	// 触发更新

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
// 点击 增加 | 减少
// 1. 对应额 action会被派发到 store
// 2. 计数器切片会看到action, 并更新其状态
// 3. 组件从 store中看到状态更新, 重新渲染
```