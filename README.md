# vue2 项目升级 typescript


## 待解决问题

- [ ] `defineEmits()` 和 `<script setup>` 一起使用，组件类型无法推断（可能是 volar 的问题）
- [ ] `defineComponent()` 中存在 `render` 函数，组件属性无法推断（可能是 volar 的问题）
- [ ] 使用 h 函数无法解析组件参数
- [ ] 如何使用 typescript 声明 jsx 函数式组件，且类型不丢失
- [ ] 函数式组件(Vue3 写法)，props 参数无法接收（ctx.attrs 可接收）

## 注意事项

- 函数式组件必须使用箭头函数声明，且要区分 vue2 vue3 写法[Note](https://github.com/luwanquan/babel-preset-vca-jsx#note)
