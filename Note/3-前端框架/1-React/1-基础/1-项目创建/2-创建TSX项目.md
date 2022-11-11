# 创建tsx 项目

> 如果你之前已经通过`npm install -g create-react-app`全局安装了create-react-app, 
> 执行`npm uninstall -g create-react-app` | `yarn global remove create-react-app`
> 确保npx总是用最新的版本

1. `npx create-react-app my-app --template typescript` | `yarn create react-app my-app --template typescript`


## 现有项目添加TS
1. `npm install --save typescript @types/node @types/react @types/react-dom @types/jest` | `yarn add typescript @types/node @types/react @types/react-dom @types/jest`
2. 修改文件名, js 或 jsx 修改为 `tsx`
3. 创建 `tsconfig.json`文件