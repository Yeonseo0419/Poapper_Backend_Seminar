const http = require('http')

const a = 5

const server = http.createServer((req, res) => {
    try {
        console.log(b) //b가 정의되어 있지 않음
    } catch (err) {
        console.error(err) //error 값을 반환함
    }

    console.log(a)
});

server.listen(8080)

server.on('listening', () => {
console.log("server is running on 8080 port.")
})

