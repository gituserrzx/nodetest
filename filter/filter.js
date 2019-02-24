const filterPath = new Map()

function checkLogin(pathName, response) {
    // const pathName = url.parse(request.url).pathname;
    if (pathName == '/login.html' || pathName == '/login'||pathName == '/error.html'){
        return true;
    }
        return false;

}
filterPath.set('filter', [checkLogin])
module.exports.path = filterPath;