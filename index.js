const http = require('http')
const url = require('url')
const fs = require('fs')
const globalConf = require('./config')
const loader = require('./loader')
const log = require('./log')

http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    const parsms = url.parse(req.url, true).query;
    const isStatic = isStaticRequest(pathName)
    // if (loader.checkLogin[0](req)){
    //     res.writeHead(302, {'location': '/error.html'})
    //     res.end()
    // }
    const filterArr = loader.get('filter')
    for (let i = 0;i< filterArr.length; i++){
        if (!filterArr[i](pathName)) {
               return false;
        }
    }
    if (isStatic) {
        //获取静态资源
       try{
           const data = fs.readFileSync(globalConf['page_path'] + pathName);
           res.writeHead(200);
           res.write(data.toString())
           res.end()
       }catch(e){
           res.writeHead(404);
           res.write('文件没找到')
           res.end()
       }
    } else {
        //获取动态资源
        if (loader.get(pathName)) {
            try{
                loader.get(pathName)(req, res)
            }catch(e){
                res.writeHead(500);
                res.write('服务器繁忙')
                res.end()
            }
        }else{
            res.writeHead(404);
            res.write('页面找不到')
            res.end()
        }
    }
}).listen(globalConf['port'],'127.0.0.1')
    log('启动完毕')
    function isStaticRequest(pathName) {
        const len = globalConf['static_file_type'].length
        for (let i = 0;i < len;i++){
            const temp = globalConf['static_file_type'][i]
            if (pathName.indexOf(temp) == pathName.length - temp.length){
                return true;
            }
        }
}

