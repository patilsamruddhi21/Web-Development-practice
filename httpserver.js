const http = require('http');

const port = process.env.PORT;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Samruddhi <h1> <p> This is my PC <p>');
})

server.listen(port, () => {

console.log(`Server is listening on port ${port}`);

});