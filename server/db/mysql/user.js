const db_query = require('../libs');
// 查询用户表
db_query('SELECT * FROM user')
  .then(results => {
    console.log(results);
  }).catch(err => {
    console.error(err)
  });