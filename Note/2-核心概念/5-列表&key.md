# 列表 & key
```ts
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((item,index) =>
  <li key={item.toString()}>{item}</li>
);
```

## key
> `https://react.docschina.org/docs/reconciliation.html#recursing-on-children`
- key 帮助 React 识别哪些元素改变了
- 如果不指定key, React将默认使用索引作为key,
- 使用index作为key 会有问题, 导致组件状态问题
- 只需要在兄弟之间独一无二就行
- 
- `一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性`