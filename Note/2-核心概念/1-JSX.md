# JSX

## 什么是JSX
- js的一种语法扩展, 
- 在编译的时候,
  - 首先看大小写, 小写就按照html 规范渲染,
  - 大写 就按照自定义的组件来渲染
  - JSX中可以混合表达式

## 为什么使用JSX
1. React 认为`js渲染逻辑`本质上与`UI逻辑` 内在耦合, 比如绑定处理事件.某些时刻通知 UI更新等
2. React 没有将 UI 与 逻辑分离到不同文件, 而是将两者放到了同一个文件中

## 如何使用JSX?
1. 小驼峰命名法
2. class 使用 className
3. 如果没有children, 可以直接闭合标签 <div />


## JSX防止注入攻击
- React DOM 在渲染所有输入内容前, 会默认进行转义. 所有内容在渲染前都被转为 字符串
- 有效的防止 `XSS(跨站脚本)` 攻击

## 
- Babel 会把 JSX 转为一个 `React.createElement()` 函数调用
- VScode语法高亮: `vscode-language-babel`