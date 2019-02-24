const fs = require('fs')
const globalConf = require('./config')

const pathMap = new Map()
const webPathArr = fs.readdirSync(globalConf['web_path'])
const webLen = webPathArr.length;
const controllerSet = []
for (let i =0;i < webLen;i++){
    const file = require('./'+globalConf['web_path']+'/'+ webPathArr[i])
    if (file.path){
        for (let[k, v] of file.path){
            if (!pathMap.get(k)){
                pathMap.set(k, v)
            } else {
                throw new Error('urlPath 出现问题，url:' + k )
            }

        }
        controllerSet.push(file.path)
    }
}

const filterPathArr = fs.readdirSync(globalConf['filter_path'])
    const filterLen = filterPathArr.length
for (let i =0;i < filterLen;i++){
    const file = require('./'+globalConf['filter_path']+'/'+ filterPathArr[i])
    if (file.path){
        for (let[k, v] of file.path){
            if (!pathMap.get(k)){
                pathMap.set(k, v)
            } else {
                throw new Error('urlPath 出现问题，url:' + k )
            }
        }
        // filterPath.push(file.path)
    }
}
// console.log(pathMap)
module.exports = pathMap