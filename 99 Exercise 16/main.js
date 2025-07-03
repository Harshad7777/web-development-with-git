// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require("./models/Employee");




conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000



app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    //clear the collection employees
    await Employee.deleteMany({})

    //generate random data
    let randomNames = ["soham", "harshad", "siddharth", "sachin", "pratik", "pranav", "siddharth", "siddharth", "siddharth", "siddharth"]
    let randomLang = ["python", "java", "javascript", "c++", "c#", "php", "ruby", "go", "swift", "kotlin"]
    let randomCities = ["Bilaspur", "muradabad", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Pune", "Hyderabad", "Jaipur"]



    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 100000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() > 0.5) ? true : false

        })
        console.log(e);


    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
