const express = require('express')
const app = express()

// 向外开放目录资源  可直接端口访问 
app.use(express.static('../http/test'))

// 挂载到指定路径前缀
app.use('/publics', express.static('../http/test'))

app.listen(80, () => {
   console.log('wcb 666666111ss');
})