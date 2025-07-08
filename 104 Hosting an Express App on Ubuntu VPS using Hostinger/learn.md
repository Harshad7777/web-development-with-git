//your terminal

ssh root@89.116.32.107
.....         //password

npm init -y

//create index.js contain
<!-- const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) -->


npm i express@4

//ubuntu terminal 


ls
ls -lart


//how to host node js website using pm2 and nginx
//https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04
//https://github.com/nodesource/distributions



curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
ls
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs
node -v

ls
node--version

sudo apt-get install -y curl

ls
mkdir sample
cd sample/
npm init -y

npm i express@4
ls
vin index.js
//escspe:wq
node index.js

//installing pm2
sudo npm install -g pm2
pm2 start index.js




//install nginx

apt install nginx
y

sudo nano /etc/nginx/sites-available/default
//change part of location

nginx -t


//finally this app start 24/7 witout domain using ip
//how to point recored to ip address in hostinger



