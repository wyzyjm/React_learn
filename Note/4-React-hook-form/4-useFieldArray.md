# useFieldArray
- 动态增加表单


```ts
function FieldArray() {
  const { control, register } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,                    // useForm | useFormContext 中的 control
    name: "test",               // 字段数组的名称, 不支持动态名称
    shouldUnregister:false,     // 卸载后是否取消注册Field Array。
    rules:{}                    // 和 register 相同的校验规则, 
  });

  return (
    {fields.map((field, index) => (
      <input
        key={field.id} // important to include key with field's id
        {...register(`test.${index}.value`)} 
      />
    ))}
  );
}


```