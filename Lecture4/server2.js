const http = require('http');
const fs = require('fs').promises;

http.createServer(async(req, res) => {
    try{
        const data = await fs.readFile('./server2.html')
        res.writeHead(200, {'Content-Type':'text/html; charser=utf-8'})
        res.end(data)
    } catch(err){
        console.log(err);
        res.writeHead(500, {'Content-Type':'text/plain; charser=utf-8'});
        res.end(err.message);
    }
})
    .listen(8080, () => {
        console.log('8080 포트와 연결된다면 출력');
    })