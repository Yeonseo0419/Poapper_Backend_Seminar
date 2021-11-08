const http = require('http')

var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month  + '-' + day;

var hours = ('0' + today.getHours()).slice(-2); 
var minutes = ('0' + today.getMinutes()).slice(-2);
var seconds = ('0' + today.getSeconds()).slice(-2); 

var timeString = hours + ':' + minutes  + ':' + seconds;

var result = dateString + ' ' + timeString

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/timer') {
      res.write(result);
      res.end()
    }
});

server.listen(8080)

server.on('listening', () => {
console.log("server is running on 8080 port.")
})