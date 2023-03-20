/*
 * Author: 吴楚标
 * Date: 2023-03-20 22:52:50
 * LastEditors: 吴楚标
 * LastEditTime: 2023-03-20 22:54:01
 * Description: 中间件的作用 自定义属性 流转属性
*/
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('这是最简单的中间件');
  // 流转关系  转交给下一个中间件 或 路由

  // 获取到达服务器的时间
  const time = Date.now()
  // 挂载属性 供后续路由使用
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  
  res.send('home page' + req.startTime)
})

app.get('/user', (req, res) => {
 res.send('user page')
})

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})