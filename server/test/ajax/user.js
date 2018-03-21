    const ajax = require('./libs/ajax')
    ajax({
        hostname: 'localhost',
        method: 'GET',
        path: '/',
    }).then(res => {
    	console.log(res)
    }).catch(error => {
    	console.log(error)

    })