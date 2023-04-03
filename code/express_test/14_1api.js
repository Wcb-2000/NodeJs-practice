const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

// 解决跨域问题
// 一定在router之前注册cors
const cors = require('cors')
app.use(cors())

const router = require('./14_接口请求方式.js')

app.use('/api', router)

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})