const studentService = require('../service/studentsService')

const path = new Map()
function getData(request, response) {

    // response.writeHead(200)
    // response.write('hello')
    // response.end()
    studentService.queryAllStudent(function (data){
        console.log(data)
        // response.writeHead(200)
        const resArr = []
        for (let i = 0;i < data.length; i++){
            resArr.push(data[i]['stu_name'])
        }
        const result = JSON.stringify({data: JSON.parse(JSON.stringify(data)) })
        // response.write(resArr.toString())
        response.write(result)
        response.end()
    } )

}
path.set('/getData', getData)

function loginValidate(request, response) {
    const dataList = {}
    request.on('data', function (data) {
        const temp = data.toString().split('&')
        for (let i = 0;i < temp.length; i++){
            const tempList = temp[i].split('=');
            dataList[tempList[0]] = tempList[1]
        }
        let result= '';
        studentService.queryStudentByNum(dataList.userName, function (data) {
            if (data == null || data.length == 0){
                result = 'fail'
                response.writeHead(302,{'location': '/error.html'})
                response.end()
            } else {
                    if (dataList.password == data[0]['password']){
                       result = 'ok'
                        response.writeHead(302,{'location': '/main.html','Set-Cookie':'id='+dataList.userName})
                        response.end()
                    } else {
                        result ='fail'
                        response.writeHead(302,{'location': '/error.html'})
                        response.end()
                    }

            }
            // response.write(result)
            // response.end();
        })
    })

}
path.set('/login', loginValidate)

module.exports.path = path