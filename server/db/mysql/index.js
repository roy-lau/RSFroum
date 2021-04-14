var mysql = require("mysql"),
    dayjs = require('dayjs')().format('YYYY-MM-DD HH:mm:ss');

var pool = mysql.createPool({
    host: '139.199.99.154',
    user: 'root',
    password: 'toor',
    port: '3306',
    database: 'RSFroum_test',
    charset: 'utf8',
});


let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, con) {
      if (err) {
        return reject(err);
      } else {
        con.query(sql, values, (err,rows) => {
          con.release();
          if (err) {
            return reject(err)
          } else {
            return resolve(rows);
          }
        })
      }
    })
  })
}

module.exports = query;