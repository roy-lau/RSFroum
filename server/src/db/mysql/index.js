const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '139.199.99.154',
    user: 'root',
    password: 'toor',
    port: '3306',
    database: 'RSFroum_test',
    charset: 'utf8',
});

connection.connect();
// 测试是否链接成功
connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log(`The solution is: ${results[0].solution} ,测试连接成功！`);
});
/*
  @title {新增} 在表格内插入一行数据
  @param {String} 表格名
  @return {Object} 查询数据
*/
var addSql = 'INSERT INTO user(user, pwd, email, phone, addr, ip, mac_addr, create_datetime) VALUES(0,?,?,?,?,?,?,?,?)';
var addSqlParams = ["admin", "admin123", "188888@163.com", 1888888, "CN", "127.0.0.1", "mac_undefiend", "dfad"];
connection.query(addSql, addSqlParams, function(err, result) {
    if (err) {
        console.log('[mysql插入 失败] - ', err.message);
        return false;
    }
    console.log('--------------------------插入数据 start---------------------------');
    //console.log('插入 ID:',result.insertId);
    console.log('插入数据 ID:', result);
    console.log('--------------------------插入数据 end-------------------------\n\n');
});
/*
  @title {查询} 查询表格数据
  @param {String} 表格名
  @return {Object} 查询数据
*/
connection.query(`SELECT * FROM user`, function(err, result) {
    if (err) {
        console.log('[mysql查询 失败] - ', err.message);
        return false;
    }
    console.log('--------------------------查询数据 start-------------------------');
    console.log(result);
    return result;
    console.log('--------------------------查询数据 end--------------------\n\n');
});
/*
   @title {修改}
   @param {String} 修改……
   @param {Array} 修改行的数据
 */
const modSql = 'UPDATE bbs_user SET name = ?,url = ? WHERE Id = ?';
const modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
connection.query(modSql, modSqlParams, function(err, result) {
    if (err) {
        console.log('[mysql更新 失败] - ', err.message);
        return false;
    }
    console.log('--------------------------更新数据 start----------------------------');
    console.log('更新 affectedRows', result.affectedRows);
    console.log('--------------------------更新数据 end-------------------------\n\n');
});
/*
  删除表格行
  @param {String} 表格名
  @param {Number} 表格行
*/
connection.query(`DELETE FROM user where id=2`, function(err, result) {
    if (err) {
        console.log('[mysql删除 失败] - ', err.message);
        return false;
    }
    console.log('-------------------------删除数据 start----------------------------');
    console.log('删除 affectedRows', result.affectedRows);
    console.log('-------------------------删除数据 end--------------------------\n\n');
});
}

connection.end();