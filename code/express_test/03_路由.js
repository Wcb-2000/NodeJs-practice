const express = require('express')

const app = express()

// 挂载路由
// 自上而下匹配

// 不实用

app.get('/', (req, res) => {
  res.send('hello wcb')
})

app.post('/', (req, res) => {
  res.send('hello post')
})

app.listen(80, ()=> {
  console.log('wwwwww');
})