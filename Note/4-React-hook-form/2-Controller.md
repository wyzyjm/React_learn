# Controller
- 将组件注册成 React Hook Form 支持的组件
- 组件包装器


```ts
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

type FormInputs = {
  firstName: string
}

function App() {
  const { control, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        name="firstName"        // 唯一名称
        control={control}       // useForm 中的control, 使用 FormProvider时有用
        rules= {{ required: 'Model name is required' }}     

        defaultValue=""         // 
        render = {(
          { onChange, onBlur, value, name, ref },{ invalid, isTouched, isDirty }
        ) => (
          <Checkbox
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
            inputRef={ref}
          />
        )}         // // 返回一个 react元素, 为子组件提供onChange, onBlur, name, ref和value。
      />
      
      <input type="submit" />
    </form>
  );
}
```