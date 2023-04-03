/*
 * Author: 吴楚标
 * Date: 2023-04-03 23:22:13
 * LastEditors: 吴楚标
 * LastEditTime: 2023-04-03 23:39:39
 * Description: 
*/
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  // 取query数据 可直接获取到不用解析
  const query = req.query;
  res.send({
    status: 0,
    msg: 'get 请求成功',
    data: query
  })
})

router.post('/book', (req, res) => {
  // 取body数据 注意解析格式urlencoded
  const body = req.body;
  const query = req.query;
  res.send({
    status: 0,
    msg: 'post 请求成功',
    data: body,
    query: query
  })
})

module.exports = router