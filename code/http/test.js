const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  const {url, method} = req

  let fpath = ''

  // 路径优化 指定首页以及 页面URl展示 消除文件名
  if(url === '/') {
    fpath = path.join(__dirname, './test/index.html')
  } else {
    fpath = path.join(__dirname, './test', url)
  }

  fs.readFile(fpath, 'utf-8', (err, data) => {
    if(err) return res.end('404 Not found!')
    res.end(data)
  })
})

server.listen(8080, function() {
  console.log('i am running http://127.0.0.1:8080 ');
})