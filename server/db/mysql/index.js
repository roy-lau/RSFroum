const db_query = require('./libs');

db_query('SELECT 1 + 1 AS solution')
  .then(results => {
    console.log(`The solution is: ${results[0].solution} ,测试连接成功！`);
  }).catch(err => {
    console.error(err)
  });;