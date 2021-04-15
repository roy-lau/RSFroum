const mysql = require("mysql"),
    dayjs = require('dayjs')().format('YYYY-MM-DD HH:mm:ss');
/**
 * 创建连接池
 * https://www.npmjs.com/package/mysql#pooling-connections
 */
const pool = mysql.createPool({
    host: '139.199.99.154',
    user: 'root',
    password: 'toor',
    port: '3306',
    database: 'RSFroum_test',
    charset: 'utf8',
});

/**
 * MySQL 查询函数封装
 * @param {String} sql  SQL 语句
 * @param {any} values SQL 值或参数
 * @returns 
 */
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        // 连接池连接数据库
        pool.getConnection((err, con) => {
            if (err) throw err; // 连接数据库失败
            // 连接数据库成功，查询数据
            con.query(sql, values, (err, rows, fields) => {
                con.release();
                if (err) {
                    console.log(`\n[mysql插入 失败] -  ${err.message} \n\n`);
                    reject(err)
                } else {
                    console.log(`[mysql_query execute : ${num++}] - ${dayjs}`);
                    // console.log('mysql_query ID:\n', result);
                    resolve(rows);
                }
            })
        })
    })
}

module.exports = query;