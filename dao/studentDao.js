const dbutil = require('./dbutil')

function  queryAllStudent(success){
    const connection = dbutil.createConnecion();
    connection.connect();
    const selectAll = `select * from students`
    connection.query(selectAll,  function (err, data) {
        if (err){
            throw err;
        } else {
            success&&success(data)
        }

    })
    connection.end()
}
function  queryStudentByNum(stu_num,success){
    const connection = dbutil.createConnecion();
    const selectAll = `select * from students where stu_num = ? `
    connection.connect();
    const queryData = [ stu_num]
    connection.query(selectAll, queryData,function (err, data) {
        if (err){
            throw err;
        } else {
            success&&success(data)

        }

    })
    connection.end()
}
module.exports = {
    'queryAllStudent':queryAllStudent,
    'queryStudentByNum':queryStudentByNum
}