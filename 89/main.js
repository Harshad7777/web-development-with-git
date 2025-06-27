const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')  //
const app = express()
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static("public"))
app.use('/blog',blog) 
app.use('/shop',shop)            //

app.get('/', (req, res) => {
  console.log("Hey its a GET request")
  res.send('Hello World2!')
})
app.post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hello World post!')
})
app.put('/', (req, res) => {
  console.log("Hey its a put request")
  res.send('Hello World put!')
})
app.get("/index", (req, res) => {
  console.log("Hey its a index")
  res.sendFile('templates/index.html', { root: __dirname })
})


app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harsh", "sachin", "prashant", "sahil", "siddharth"] })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
