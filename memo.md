# memo
### day01-0907 2H(Hour)
 1. 搭建本地git库/github远程库

> echo # react-demo >> README.md

> git init

> git add README.md

> git commit -m "first commit"

> git remote add origin git@github.com:ningxiaowa/react-demo.git

> git push -u origin master

 2. 学习简单的markdown语法

### day02-0908 3H
 1. 通读react基本语法 2H
 2. 参照IdiomaticReact例子搭建项目结构 1H

### day03-0909 3H
 1. grunt运行报错, 最后查找原因是eslintrc和babelrc配置有问题 1H
 2. 完善了项目结构, 参照例子把index.html/main.js/app.js等基本框架搭建起来 1.5H
 3. 增加了新页面(组件)Recruit作为要完成的task组件 0.5H

### day04-0910 5H
 1. 将数据替换成了动态加载的模拟数据 1H
 2. 在实现父组件/子组件更新state上花费了大量时间, 总是不成功, 最后发现需要显式调用componentWillReceiveProps 3H
 3. 增加"标签"组件 1H

### day05-0911 2H
 1. 完成标签组件功能 2H

### TODO
 1. ~~checkbox的label标签应该可以点选, 现在未生效~~ 已解决: label拼错成lable
 2. 选中职位, 部门的选中状态有可能会变化, 比如: 直接把职位全选中后, 部门应该自动变成勾选状态; 如果取消勾选某一职位, 部门应该变成非全选状态...

### Others
 1. 可以把全选/取消按钮合并, 点击切换, 但要判断直接把所有checkbox选中或取消后, 按钮自动切换, 暂未处理
 2. 样式未处理
