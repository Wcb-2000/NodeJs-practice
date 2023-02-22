const express = require('express')

const app = express()

// 向客户端发送请求
app.get('/user', (req, res) => {
  res.send({name: 'wcb', age: 23, gender: '男'})
})

app.post('/user', (req, res) => {
  res.send('请求成功')
})

app.post('/', (req, res) => {
  // query 代表接口凭借的参数 ?name=wcb   返回{name:wcb}
  // 默认 {}
  res.send(req.query)
})

// 动态匹配url参数  get请求
app.get('/params/:id', (req, res) => {
  res.send(req.params)
})
// 匹配多个参数
app.get('/paramsMore/:id/:name', (req, res) => {
  res.send(req.params)
})

app.listen(80, () => {
  console.log('这是第一次express运行');
})