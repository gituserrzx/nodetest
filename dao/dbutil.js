const mysql = require('mysql')

function createConnection() {
    const connection = mysql.createConnection({
        port:'3306',
        host: '127.0.0.1',
        user: 'root',
        password:'zx123',
        database: 'school'
    })
    return connection
}


module.exports.createConnecion = createConnection;
