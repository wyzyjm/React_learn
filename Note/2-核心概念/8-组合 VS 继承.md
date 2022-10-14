# 组合 vs 继承
- 推荐使用组合, 并非继承


## 包含关系
- 有些组件无法提前知晓子组件的具体内容, 比如 sidebar. dialog等, 此时使用 props.children
- 也可以自行约定内容, 就像插槽(slot)

- 组件可以接收任意props, 包括基本数据类型, React元素, 函数等