const express = require('express')
const app = express()

const mw = function (req, res, next) {
  console.log('这是最简单的中间件');
  // 流转关系  转交给下一个中间件 或 路由
  next()
}

// 将mw注册为全局生效的中间件
app.use(mw)

// 简化方式
// app.use(function (req, res, next) {
//   console.log('这是最简单的中间件');
//   // 流转关系  转交给下一个中间件 或 路由
//   next()
// })

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/user', (req, res) => {
 res.send('user page')
})

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})