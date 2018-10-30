var mysql = require('mysql');

var models = {

    mysql: {

        host: '192.168.10.82',
        port: '3701',
        user: 'kylin',
        password: 'Kylin_2014_NJ',
        database: 'mysql'

    }

}

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

module.exports = conn;
console.log('add --- db.js');