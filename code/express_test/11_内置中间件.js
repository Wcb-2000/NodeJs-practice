/*
 * Author: 吴楚标
 * Date: 2023-04-02 15:20:08
 * LastEditors: 吴楚标
 * LastEditTime: 2023-04-02 15:36:44
 * Description: 
*/
const express = require('express')
const app = express()

// 解析json数据
app.use(express.json())

// 解析url
// x-www-form-urlencoded 数据格式解析
app.use(express.urlencoded({extended: true}))

app.post('/user', (req, res) => {
  // req.body 可接收客户端发送的数据
  // 在未配置解析中间件前 req.body 默认undefined
  console.log(req.body);
  res.send('user page')
})


app.post('/book', (req, res) => {
  console.log(req.body);
  res.send('user book')
})


app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})