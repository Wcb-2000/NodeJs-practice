/*
 * Author: 吴楚标
 * Date: 2023-03-20 22:52:50
 * LastEditors: 吴楚标
 * LastEditTime: 2023-03-20 23:09:22
 * Description: 不使用 app.use() 的中间件 为局部中间件
*/
const express = require('express')
const app = express()

const mw1 = function (req, res, next) {
  console.log('这是最简单的中间件1');
  // 流转关系  转交给下一个中间件 或 路由

  // 获取到达服务器的时间
  const time = Date.now()
  // 挂载属性 供后续路由使用
  req.startTime = time
  next()
}

const mw2 = function (req, res, next) {
  console.log('这是最简单的中间件2');
  // 流转关系  转交给下一个中间件 或 路由

  // 挂载属性 供后续路由使用
  req.wcb = 'wcb'
  next()
}

// 多个局部中间件  两种写法
 
app.get('/', mw1, mw2, (req, res) => {
  res.send('home page' + req.startTime)
})

app.get('/user',[mw1, mw2], (req, res) => {
 res.send('user page')
})

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})