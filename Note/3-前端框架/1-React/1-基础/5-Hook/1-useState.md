# useState 
- `const [state, setState] = useState(initialState)`
- initialState: 
    - 1. 惰性初始state: 只在初始渲染的时候起作用
    - 2. 
- state:
- setState: 
    - 1. 接收新的state值并将组件的一次重新渲染加入队列
    - 2. 函数式更新, 接收旧值, 返回一个新值, 新值如果与老值相同, 就不会重新渲染
    - 不会合并之前的, 想合并就用函数式组件, 在里面做东西
- 跳过state更新
    - 1. 调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行
    - 

```tsx
import { useState } from 'react'

const MyComponent = (props): JSX.element =>{

    const [state, setState] = useState(() => {
      const initialState = someExpensiveComputation(props);	// 只在第一次起作用
      return initialState;
    });

	const [number,setNumber] = useState<number>(1)
	const [string,setString] = useState<string>('a')

	return <> { number } --- { string } </>
}
```