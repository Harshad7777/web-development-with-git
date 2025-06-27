// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World23</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//express.js example hellowrld server
// const express = require('express')
// const app = express()
// const port = 3000
//app.get or app.post or app.put or app.delete(path, handler)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send('about us')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello contact us')
// })
// app.get('/blog/intro to js', (req, res) => {
//   //logic to get blog intro to js from database
//   res.send('Hello blogs')
// })
// app.get('/blog/intro to python', (req, res) => {
//   //logic to get blog intro to python from database
//   res.send('Hello blogs python')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })





// parameter amd query 
//logic to fetch {sluge} from database

const express = require('express')
const app = express()
const port = 3000

//static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about us')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact us')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
  //for url : http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params) //will output {slug: 'intro to padosi'  }
  console.log(req.query) //will output { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog/intro to js', (req, res) => {
//   //logic to get blog intro to js from database
//   res.send('Hello blogs')
// })
// app.get('/blog/intro to python', (req, res) => {
//   //logic to get blog intro to python from database
//   res.send('Hello blogs python')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


