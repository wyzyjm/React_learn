# Diff算法
1. 组件更新, 会生成两棵不同的树
2. 对比两颗树时, React首先比较根节点
3. 当根节点为不同类型的元素时, React会拆卸原有的树, 并建立新的树
    - 当卸载一棵树时, 对应的DOM节点也会被销毁, `componentWillUnmount()` 执行
    - 新建一棵树时, `componentWillMount()` 和 `componentDidMount()` 执行
4. 当根节点相同时, React会保留DOM节点, 仅修改有改变的属性, 例如 className style等
    - 处理完该节点后, React继续对子节点进行递归


## 对子节点递归
- key的作用
1. 当没有key时, key的默认值为 列表的index
    - 导致问题, 当列表顺序变换 或 在列表前面插入节点时, 这整个列表都会变, 而不是仅仅添加一个列表
    - 组件实例 是基于key来决定是否更新及复用, 如果key是一个下标, 修改顺序时会修改当前key, 导致非受控组件的state 可能相互篡改
2. 当填写了key, 且key不是 index时:
    - 列表更新, 就只更新发生变化的节点, 或 增加新的节点