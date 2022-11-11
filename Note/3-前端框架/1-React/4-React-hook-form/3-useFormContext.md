# useFormContext
- 允许访问表单上下文
- 用于深度嵌套的结构中
- useFormContext : 不接收参数


## 使用
- 为了让useFormContext正常工作，你需要用FormProvider组件包装你的表单。

```ts
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} > // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}

```