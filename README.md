# 如何启动db.json5

```bash
npx json-server --watch db.json5
```

# tailwind在父组件修改子组件样式

**批量修改子组件样式**

```css
@layer components {
  .customtest .ant-btn {
    @apply bg-blue-500! font-bold! text-red-500!;
  }
}
```

**更改一个属性**

```text
# 任意变体一次只能修改一个样式属性
[&_.ant-btn]:bg-blue-500!
```
