// const fs = require('fs')
// const globalConf = require('./config')
//
// const filterLoader = []
// const pathMap = new Map()
// const filterPathArr = fs.readdirSync(globalConf['filter_path'])
// const filterLen = filterPathArr.length
// for (let i =0;i < filterLen;i++){
//     const file = require('./'+globalConf['filter_path']+'/'+ filterPathArr[i])
//     if (file.path){
//         for (let[k, v] of file.path){
//             if (!pathMap.get(k)){
//                 pathMap.set(k, v)
//             } else {
//                 throw new Error('urlPath 出现问题，url:' + k )
//             }
//         }
//         filterLoader.push(file.path)
//     }
// }

