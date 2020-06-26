const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '192.168.99.100',  // docker-machine ip
  user     : 'root',
  password : '123456',
  // database : 'my_db'
});

connection.connect();

// 创建数据库
connection.query('CREATE DATABASE IF NOT EXISTS haiying CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.query('use haiying;');

// 创建表
connection.query(`CREATE TABLE IF NOT EXISTS user (
  name varchar(32),
  age tinyint
);`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();
