/*
 * Author: 吴楚标
 * Date: 2023-04-02 16:39:40
 * LastEditors: 吴楚标
 * LastEditTime: 2023-04-02 16:39:56
 * Description: 
*/
const qs = require('querystring')

const bodyParser = (req, res, next) => {
  let str = ''
  req.on('data', (chunk) => {
    str += chunk
  })
  req.on('end', () => {
    req.body = qs.parse(str)
    next()
  })
}

module.exports = bodyParser