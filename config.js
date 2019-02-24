const fs = require('fs');

const globalConf = {};
const conf = fs.readFileSync('server.conf').toString()
    conf.split('\r\n').forEach( (item) => {
        const temp = item.split('=');
        if (temp.length == 2){
            globalConf[temp[0]] = temp[1];
        }
    })
if (globalConf['static_file_type']) {
    globalConf['static_file_type'] = globalConf['static_file_type'].split('|')
} else {
    throw new Error('配置文件出错，缺少static_file_type')
}
    globalConf.basePath = __dirname + globalConf['page_path']
    module.exports = globalConf