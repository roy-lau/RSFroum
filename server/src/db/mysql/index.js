const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '139.199.99.154',
    user: 'root',
    password: 'toor',
    port: '3306',
    database: 'bbs_koa_test',
    charset: 'utf8',
});

// 创建数据表
// mysql> CREATE TABLE IF NOT EXISTS `bbs_user`(
//    `Id` INT UNSIGNED AUTO_INCREMENT,
//    `user` constCHAR(100) NOT NULL,
//    `pwd` constCHAR(100) NOT NULL,
//    `ip` constCHAR(40) NOT NULL,
//    `adder` constCHAR(50) NOT NULL,
//    `create_date` DATE,
//    PRIMARY KEY ( `Id` )
// )ENGINE=InnoDB DEFAULT CHARSET=utf8;
connection.connect();
module.exports = {
    // 测试是否链接成功
    mysql_test() {
        connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
            if (error) throw error;
            console.log(`The solution is: ${results[0].solution} ,测试连接成功！`);
        });
    },
    /*
      @title {新增} 在表格内插入一行数据
      @param {String} 表格名
      @return {Object} 查询数据
    */
    mysql_add() {
        // const  addSql = 'INSERT INTO bbs_user(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
        const addSql = 'INSERT INTO bbs_user(Id,user,pwd,ip,adder,create_date) VALUES(0,?,?,?,?,?)';
        const addSqlParams = ['admin', 'admin123', '192.100.1.21', 'CN', NOW()];
        connection.query(addSql, addSqlParams, function(err, result) {
            if (err) {
                console.log('[插入 失败] - ', err.message);
                return;
            }

            console.log('--------------------------插入数据 start---------------------------');
            //console.log('插入 ID:',result.insertId);
            console.log('插入数据 ID:', result);
            console.log('--------------------------插入数据 end-------------------------\n\n');
        });
    },
    /*
      @title {查询} 查询表格数据
      @param {String} 表格名
      @return {Object} 查询数据
    */
    mysql_query(tableName) {
        connection.query(`SELECT * FROM ${tableName}`, function(err, result) {
            if (err) {
                console.log('[查询 失败] - ', err.message);
                return;
            }

            console.log('--------------------------查询数据 start-------------------------');
            console.log(result);
            console.log('--------------------------查询数据 end--------------------\n\n');
        });
    },
    /*
       @title {修改}
       @param {String} 修改……
       @param {Array} 修改行的数据
     */
    mysql_update(modSql,modSqlParams) {
        // const modSql = 'UPDATE bbs_user SET name = ?,url = ? WHERE Id = ?';
        // const modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
        connection.query(modSql, modSqlParams, function(err, result) {
            if (err) {
                console.log('[更新 失败] - ', err.message);
                return;
            }
            console.log('--------------------------更新数据 start----------------------------');
            console.log('更新 affectedRows', result.affectedRows);
            console.log('--------------------------更新数据 end-------------------------\n\n');
        });
    },
    /*
      删除表格行
      @param {String} 表格名
      @param {Number} 表格行
    */
    mysql_del(tebleName, id) {
        connection.query(`DELETE FROM ${tebleName} where id=${id}`, function(err, result) {
            if (err) {
                console.log('[删除 失败] - ', err.message);
                return;
            }
            console.log('-------------------------删除数据 start----------------------------');
            console.log('删除 affectedRows', result.affectedRows);
            console.log('-------------------------删除数据 end--------------------------\n\n');
        });
    },
}

connection.end();