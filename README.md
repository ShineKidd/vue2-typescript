# vue2 项目升级 typescript


## 待解决问题

- [x] `defineEmits()` 和 `<script setup>` 一起使用，组件类型无法推断（删除自定义的 tsx shim 使用 @vue/runtime-dom 内置的）
- [x] `defineComponent()` 中存在 `render` 函数，组件属性无法推断（不要混用 defineComponent 和 render ）
- [ ] 使用 h 函数无法解析组件参数
- [x] 如何使用 typescript 声明 jsx 函数式组件，且类型不丢失(使用 defineComponent)
- [x] 函数式组件(Vue3 写法)，props 参数无法接收（ctx.attrs 可接收）
- [x] 在 `setup()` 中通过 `ref` 引用返回模板里的节点，`ref` 必须声明为 `ref(null)`

## 注意事项

- 函数式组件必须使用箭头函数声明，且要区分 vue2 vue3 写法[Note](https://github.com/luwanquan/babel-preset-vca-jsx#note)
