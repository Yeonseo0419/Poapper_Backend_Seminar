//잘못된 주소에 접근했을 때 에러 해결 방법
const http = require('http');
const url = require('url');

const app = http.createServer((req,res)=>{
	let pathname = url.parse(req.url,ture).pathname;
    
    if(pathname === '/') {
    	res.writeHead(200);
        res.end('기본 페이지');
    }

    else {
    	res.writeHead(404);
        res.end('not found');
    }
});