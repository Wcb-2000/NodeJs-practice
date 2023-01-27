/*
 * Author: 吴楚标
 * Date: 2023-01-27 23:26:57
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-27 23:37:55
 * Description: 
*/
/* 
问题：使用fs模块操作文件时，若path是相对路径（./ 或 ../），容易出现路径拼接错误问题
原因：代码运行时，会以执行node命令时所处的目录与path拼接成完整路径

解决方式： 将相对路径方式改为完整路径，防止动态凭借问题
*/