# task
*使用React.js完成上图的像素级UI实现，不需要写后台，数据可以完全在前端模拟，但component要求能处理动态数据。可以理解为你已经从服务器拿到了json的数据，并存在在client里。注意这个mock是一个页面的左侧边栏，宽度没有要求，页面右侧可为空白。*

### 交互要求实现：

1. 招聘职位区域
  * 点击清空：清空所有选中选项
  * 点击部门左侧checkbox：toggle所有子目录下checkbox以及部门的checkbox
  * 点击单个岗位checkbox：toggle点击的checkbox
2. 标签区域
  * 点击清空：清空所有选中标签
  * 点击标签：toggle标签高亮
  * 没有明确指出的交互不需要实现

### 要求
* 把它当做一个正式工作的任务来做，这就要求你考虑代码的可维护性和扩展性
* 使用React.js的jsx
* 使用git，切勿全部写好后commit一次，git commit的规范也是考察项目之一
* 设计代码结构应尽量idiomatic（详情参考http://facebook.github.io/react/docs/thinking-in-react.html）
* 代码尽可能地简洁，规范，模块化，代码风格尽量遵循airbnb (https://github.com/airbnb/javascript)
* 不需要引入数据层的library如flux,redux等
* 如果愿意，可以使用ES6

### 时间
* 建议12-18小时完成，其中
  - 学习React.js： 4-8小时
  - 规划代码： 2小时
  - 实现：6-8小时

### 提交
* 代码，包括.git
* readme.txt 写清楚
  - 如何验收实现成果
  - 完成任务总共花费时间，请be honest，在完成过程中每天记录用时
  - 还没实现的功能
  - 有bug的地方，以及没有解决的原因

### 参考资料
* React官方介绍与文档
  - http://facebook.github.io/react/docs/getting-started.html
  - http://facebook.github.io/react/docs/tutorial.html
  - http://facebook.github.io/react/docs/thinking-in-react.html
* React实例
  - https://github.com/netgusto/IdiomaticReact （可以无视immutable.js的部分）
  - Git  http://rogerdudler.github.io/git-guide/ （其实只需要使用最简单的本地workflow)
