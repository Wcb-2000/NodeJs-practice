const express = require('express')
const qs = require('querystring')
const app = express()

// 封装的中间件
const bodyParser = require('./customer')

// 解析表单数据的中间件
// app.use(function (req, res, next) {
//   // 定义中间件具体业务逻辑

//   // 监听开始
//   let str = ''
//   req.on('data', (chunk) => {
//     str+=chunk
//   })

//   // 监听结束
//   req.on('end', () => {
//     const obj = qs.parse(str)
//     console.log(obj);
//     req.body = obj
//     next()
//   })
// })

// 导入封装的模块中间件
app.use(bodyParser)

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})