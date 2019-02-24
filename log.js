const fs = require('fs')
const globalConf = require('./config')
const fileName = globalConf['log_path']+'/'+globalConf['log_name']
function log(data){
    fs.appendFile(fileName, data+'\n', function (err) {
        if (err){
            throw err
        }
    })
}

module.exports = log;
