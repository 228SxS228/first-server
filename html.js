const http = require("http");

const host = 'localhost';
const port = 8080;

function requestListener (req, res) {

    taa = JSON.parse('{"div": 15}', function(key, value) {
        console.log(key, value);
        if (key === 'div') {
            return( function test(req, res) {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(`<html><body><h1>This is HTML</h1></body></html>`);
            })
        }
    });

    
};

// const test = function (req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(`<html><body><h1>This is HTML</h1></body></html>`);
// }

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});