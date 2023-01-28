/*
 * Author: 吴楚标
 * Date: 2023-01-29 00:01:36
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-29 00:03:56
 * Description: 
*/
/* 
path.basename('路径'， 扩展名) 解析文件名
*/

const path = require('path')

const name = '/a/b/c/index.js'
const fileName = path.basename(name)

console.log(fileName);

const fileName2 = path.basename(name, '.js')

console.log(fileName2);

