const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charser=utf-8'})
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => {
        console.log('8080 포트와 연결된다면 출력')
    })