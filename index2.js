const http = require('http');

// function dataControl(req, resp)
// {
//     resp.write("<h1>Hii Dev here</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4000);


const dataControl = (req, resp) =>
{
    resp.write("<h1>Haha Dev here</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4000);


// http.createServer((req, resp)=>
// {
//     resp.write("<h1>Hello Dev here</h1>");
//     resp.end();
// }).listen(4000); 