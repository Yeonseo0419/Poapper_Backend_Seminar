const http = require('http')

const a = 5

const server = http.createServer((req, res) => {
    console.log(b)      //b가 정의되어 있지 않음
    console.log(a)
});

server.listen(8080)

server.on('listening', () => {
console.log("server is running on 8080 port.")
})

