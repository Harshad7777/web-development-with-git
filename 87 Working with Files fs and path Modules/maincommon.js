const fs = require("fs")

// console.log(fs)




//call function

console.log(" starting...")
// fs.writeFileSync("harshad.txt","harshad is a good boy")
fs.writeFile("harshad2.txt", "harshad is a good boy", () => {
    console.log("file created")
    fs.readFile("harshad2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("harshad.txt", "harshadrobo", (e, d) => {
    console.log(d)
})
console.log("ending...")
