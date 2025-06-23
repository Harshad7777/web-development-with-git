//0
// const { createServer } = require('node:http');
// const FS = require("fs")




// 1
// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1> Hello World </h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// 2
// import { a, b, d } from "./mymodule.js"
// console.log(a, b, d)

// 3
// import obj from "./mymodule.js"
// console.log(obj)

const a = require("./mymodule2.js")

console.log(a)





