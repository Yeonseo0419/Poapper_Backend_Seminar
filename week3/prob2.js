const http = require('http')
var url = require('url');
var urlStr = 'http://www.localhost:8080/operator/num1/num2';
var urlObj = url.parse(urlStr, true);
console.log(urlObj);

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/add') {
        var queryData = url.parse(request.url, true).query;
        var result = num1 + num2;

        res.write(result);
        res.end()
    }else if(req.url == '/sub') {
        var queryData = url.parse(request.url, true).query;
        var result = num1 * num2;  

        res.write(result);
        res.end()
    }else if(req.url == '/mul') {
        var queryData = url.parse(request.url, true).query;
        var result = num1 - num2;  

        res.write(result);
        res.end()
    }else if(req.url == '/div') {
        var queryData = url.parse(request.url, true).query;
        var result = num1 / num2;
  
        res.write(result);
        res.end()
    }
});

server.listen(8080)

server.on('listening', () => {
console.log("server is running on 8080 port.")
})