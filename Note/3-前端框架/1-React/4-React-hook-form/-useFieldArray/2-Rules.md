# Rules
- useFieldArray 会自动生成一个 唯一id
- 必须用 `field.id` 作为组件的 key, 而不是用index

```ts
{fields.map((field, index) => <input key={field.id} ... />)}
```

## 不能在 一个函数中 连续修改值, 只能修改一个值, 然后其它的 依赖它去更新

```ts
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, [fields])
```

## 不能有多个同名的  useFieldArray 
## 每个输入名称必须是唯一的，如果您需要构建具有相同名称的复选框或单选，那么就将其与useController或controller一起使用。
## Does not support flat field array.
## 当 append, prepend, insert and update 时, 必须有默认值
```ts
append({ firstName: 'bill', lastName: 'luo' }); ✅
```

## ts
- 当注册为 name时, 必须 作为常量
- 对于嵌套字段数组，必须根据字段数组的名称进行类型转换。
```ts
const { fields } = useFieldArray({ name: `test.${index}.keyValue` as 'test.0.keyValue' });
```