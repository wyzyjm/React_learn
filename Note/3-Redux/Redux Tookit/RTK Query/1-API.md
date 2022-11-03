# 使用
```ts
import { createApi } from '@reduxjs/toolkit/query' 
// 或者
// import { createApi } from '@reduxjs/toolkit/query/react'


createApi()         // 定义 endpoits, 一个应用只用一次
 
fetchBaseQuery()    // http 请求
<ApiProvider />     // 如果您还没有 Redux 商店，可以用作 Provider
setupListeners()    // 用于启用 refetchOnMount 和 refetchOnReconnect 行为的实用程序。
```