    moment = require('moment')().format('YYYY-MM-DD HH:mm:ss');

    //创建连接
    const query = async(sql) => {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createPool({
            host: '139.199.99.154',
            user: 'root',
            password: 'toor',
            port: '3306',
            database: 'RSFroum_test',
            charset: 'utf8',
        });
        const [rows, fields] = await connection.execute(sql)
        return rows;
    }


    module.exports = query;