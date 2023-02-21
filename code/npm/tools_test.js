// 工具包包含package文件指向index，路径不完全也可访问  
const time = require('./tools_test_wcb_01')


const data = new Date()

const test =time.dateFormat(data)

console.log(test);

const htmlStr = '<h1 title="abc">这是标签1<span>123&nbsp;</span></h1>'
const str = time.htmlEscape(htmlStr)
console.log(str);

const unStr = time.htmlUnEscape(str)
console.log(unStr);