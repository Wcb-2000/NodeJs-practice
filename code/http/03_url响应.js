/*
 * Author: 吴楚标
 * Date: 2023-02-06 23:58:00
 * LastEditors: 吴楚标
 * LastEditTime: 2023-02-07 00:01:54
 * Description: 
*/
const http = require('http')
const serve = http.createServer()

// req 保存客户端相关数据
serve.on('request', (req, res) => {
  const {url, method} = req
  let content = '<h1>404 Not found!</h1>'
  if(url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/test.html') {
    content = '<h1>i am test</h1>'
  }

  // 中文乱码设置请求头
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 向客户端响应内容
  res.end(content)
})

serve.listen(8080, () => {
  console.log('serve is running at http://127.0.0.1:8080');
})