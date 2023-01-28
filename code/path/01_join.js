/*
 * Author: 吴楚标
 * Date: 2023-01-28 23:47:10
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-28 23:55:51
 * Description: 
*/
/*
path.join() 拼接完整路径

语法： path.join([...paths])
 */

const path = require('path')

const pathStr = path.join('/a', './b/c', '../', '/d', 'e')
console.log(pathStr);  // /a/b/d/e

// '../'  回退上一级 类似抵消一层

const pathDir = path.join(__dirname, './test1')
console.log(pathDir); // 输出当前目录

// 路径拼接  使用path.join() 替代 + 