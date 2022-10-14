# Context
`https://react.docschina.org/docs/context.html#when-to-use-context`
- 不同层级的组件 访问 同一个数据

```ts
const MyContext = React.createContext(defaultValue);
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效


<MyContext.Provider value={/* 某个值 */}>
    // 组件
</MyContext.Provider >
```