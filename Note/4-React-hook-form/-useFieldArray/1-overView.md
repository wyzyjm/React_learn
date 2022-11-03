# useFieldArray
- 动态增加 表单 字段

## 参数
- name: string ---> 字段名
- control: object ---> 控件对象, 如果使用的是 FormContext, 可选的
- 
- shouldUnregister: boolean ---> 卸载后 是否取消注册
- keyName: string = id ---> 标识, 下一版本移除

## return
- fields    : object & {id: string} ---> defaultValue和key
- append    : 追加 字段
- prepend   : 前加 字段
- insert    : 插入 字段
- swap      : 交换 位置
- move      : 移动 位置
- update    : 更新字段, 可以使用 setValue API 代替
- replace   : 替换 字段
- remove    : 删除特定位置, 如果没提供 索引, 就全部删除

```ts
function FieldArray() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
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