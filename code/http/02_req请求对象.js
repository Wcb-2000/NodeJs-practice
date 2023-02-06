const http = require('http')
const serve = http.createServer()

// req 保存客户端相关数据
serve.on('request', (req, res) => {
  const {url, method} = req
  console.log('url:' + url);
  console.log('method:' + method);

  // 中文乱码设置请求头
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 向客户端响应内容
  res.end('hi bbbbbbb 你好')
})

serve.listen(8080, () => {
  console.log('serve is running at http://127.0.0.1:8080');
})