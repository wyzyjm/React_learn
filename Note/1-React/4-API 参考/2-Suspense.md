# Suspense
> 使组件可以等待某些操作结束后, 再进行渲染
> 目前仅支持: React.lazy 动态加载组件, 未来会支持 数据获取
> 需要配合 `Suspense` 一起使用

- 可以
```tsx
import { lazy, Suspense } from 'react'
const SomeComponent = lazy(() => import('./SomeComponent'));  // 延迟初次渲染未用到的组件

<Suspense > 
    <SomeComponent />
</Suspense>
```