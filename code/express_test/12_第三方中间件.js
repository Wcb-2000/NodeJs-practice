/*
 * Author: 吴楚标
 * Date: 2023-04-02 15:43:31
 * LastEditors: 吴楚标
 * LastEditTime: 2023-04-02 15:53:05
 * Description: 
*/
const express = require('express')
const app = express()

const parser = require('body-parser')
app.use(parser.urlencoded({extended: false}))

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('wcbwcbwcbwcbwcbwcbwcb');
})