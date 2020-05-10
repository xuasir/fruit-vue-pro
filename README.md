# vue 中后台解决方案

### 特性

### 如何开始
```
npm install
```

### 开发环境启动指令
```
npm run serve
```

### 生产环境打包
```
npm run build
```

### autofix lint 错误
```
npm run lint
```

### 提交代码请执行
```
// 首先通过 git add 或者IDE添加需要提交的变更
// 然后运行
npm run cm
```

### commit msg 规范
> build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
> ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
> docs：文档更新
> feat：新增功能
> merge：分支合并 Merge branch ? of ?
> fix：bug 修复
> perf：性能, 体验优化
> refactor：重构代码(既没有新增功能，也没有修复 bug)
> style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
> test：新增测试用例或是更新现有测试
> revert：回滚某个更早之前的提交
> chore：不属于以上类型的其他类型

### 生成 changelog
```
// 第一次生成
npm run release -- --first-release
// 后续生成
npm run release
```
