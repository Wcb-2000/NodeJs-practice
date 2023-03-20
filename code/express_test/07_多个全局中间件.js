/*
 * Author: 吴楚标
 * Date: 2023-03-20 22:52:50
 * LastEditors: 吴楚标
 * LastEditTime: 2023-03-20 23:00:20
 * Description: 中间件的作用 自定义属性 流转属性
*/
const express = require('express')
const app = express()

// 按顺序依次执行中间件 

// 第一个 全局中间件
app.use(function (req, res, next) {
  console.log('1');
  // 流转关系  转交给下一个中间件 或 路由

  // 获取到达服务器的时间
  const time = Date.now()
  // 挂载属性 供后续路由使用
  req.startTime = time
  next()
})

// 第二个
app.use(function (req, res, next) {
  console.log('2');
  // 流转关系  转交给下一个中间件 或 路由

  // 挂载属性 供后续路由使用
  req.wcb = 'wcb'
  next()
})

app.get('/', (req, res) => {
  
  res.send('home page' + req.startTime)
})

app.get('/user', (req, res) => {
  
 res.send('user page'+ req.wcb)
})

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})