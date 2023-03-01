/*
 * Author: 吴楚标
 * Date: 2023-03-01 22:48:26
 * LastEditors: 吴楚标
 * LastEditTime: 2023-03-01 22:55:17
 * Description: 
*/
const express = require('express')

const app = express()

const router = require('./04_模块化路由')

// 注册全局中间件
// app.use(router)

// 统一访问前缀
app.use('/api', router)



app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})