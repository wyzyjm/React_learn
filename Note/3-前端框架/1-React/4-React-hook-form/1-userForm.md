# useForm
```ts
const { 
    control,                // 将组件注册到 Ract Hook From
    handleSubmit,           // 提交, 同步 和 异步两中方法
    formState: { errors }   // 表单状态
    
    watch,
    errors, 
    register, 
} = useForm();


```


1. handleSubmit 
    - 接收两个callback 正确,失败
    - 验证成功后, 传递表单数据
```ts
// ((data: Object, e?: Event) => void, (errors: Object, e?: Event) => void) => Function
// 异步验证方法 : handleSubmit(async (data) => await fetchAPI(data))

```

2. formState : 表单状态的
    - 在 useEffect 中监视表单状态时, 应将 formState 传进去
```ts
useEffect(() => {
  if (formState.errors.firstName) {
    // do the your logic here
  }
}, [formState]); // ✅ 
```