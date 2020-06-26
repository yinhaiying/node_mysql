# docker_mysql

## docker中安装mysql
使用docker来安装mysql
```javascript
docker run --name mysql1 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.7.28
```

## docker常见的命令

1. docker ps 查看容器运行状态
2. docker kill mysql1 关闭容器
3. docker container start mysql1 开启关掉的容器
4. docker rm mysql1 删除容器

使用docker运行的容器，默认不会持久化，也就是说如果容器被删除了，那么数据也没了。

## 如何在docker中用命令行连接mysql
```javascript
docker exec -it mysql1 bash
```
这个命令会进入一个容器，容器里有一个Linux系统。
然后你就可以在这个系统里运行mysql,可以使用一些命令命令操作mysql。


## node连接mysql
1. 安装mysql
```javascript
npm install mysql
```
2. 连接mysql
```javascript
const connection = mysql.createConnection({
  host     : '192.168.99.100',  // docker-machine ip
  user     : 'root',
  password : '123456',
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

```
