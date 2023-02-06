const http = require('http')

const serve = http.createServer()

// 客户端请求端口会经过on
serve.on('request', function(req, res) {
  console.log('wcb hiiiiiiiii');
})

serve.listen(8080, function() {
  console.log('i am running http://127.0.0.1:8080 ');
})