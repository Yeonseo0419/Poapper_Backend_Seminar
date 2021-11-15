const http = require("http");
let database = {};
let idx = 0;

const server = http.createServer((req, res) => {
    const method = req.method;
    const url_parsed = req.url.split('/');

    console.log(method)
    console.log(url_parsed);

    if(method == 'POST'){
        database[idx] = url_parsed[1];
        idx += 1;
        res.end();
    }else if(method == 'GET'){
        const url_index = Number(url_parsed[1]);
        res.write(database[url_index]);
        res.end();
    }else if(method == 'PUT'){
        const url_index = Number(url_parsed[1]);
        const url_data = url_parsed[2];
        database[url_index] = url_data;
        res.write("put success");
        res.end();
    }else if(method == 'DELETE'){
        const url_index = Number(url_parsed[1]);
        database[url_index] = undefined;
        res.write("delete success");
        res.end();
    }
    console.log("database");
    console.log(database);
});

server.listen(8080)

server.on('listening', () => {
console.log("server is running on 8080 port.")
})



