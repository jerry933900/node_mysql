// 使用mysql这个包
// 导入mysql
let mysql = require('mysql');

// 执行代码
// 连接的 地址 用户名 密码 库的名字
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });
   // 连接数据库
  connection.connect();
   
//   connection.query('select * from manyhero',  (error, results, fields)=>{
  connection.query("select * from manyhero where name like '%牛%' ",  (error, results, fields)=>{
    if (error) throw error;// 抛出一个异常
    // console.log('The solution is: ', results[0].solution);
    console.log('The solution is: ', results);
    console.log(results.length);
  });
   
  // 关闭数据库连接
  connection.end();