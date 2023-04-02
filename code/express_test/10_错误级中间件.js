const express = require('express')
const app = express()

app.get('/', (req, res) => {
  throw new Error('服务器故障啦')
  res.send('page')
})

// 捕获错误的中间件
// 必须注册在所有路由之后
app.use(function(err, req, res, next) {
  console.log(err.message)
  res.send('Error' + err.message)
})

app.listen(80, function() {
  console.log('wcbwcbwcb');
})