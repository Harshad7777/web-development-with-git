//first "type=module" in the package.json
//read a file using fs/promises in Node.js

// import fs from "fs/promises"
// let a = await fs.readFile("harshad.txt")
// console.log(a.toString())




// read and write a file using fs/promises in Node.js
// import fs from "fs/promises"
// let a = await fs.readFile("harshad.txt")
// let b = await fs.writeFile("harshad.txt", "\n\n\n\n\n\nthis is amazing  promise")
// console.log(a.toString(),b)




import fs from "fs/promises"
let a = await fs.readFile("harshad.txt")
let b = await fs.appendFile("harshad.txt", "\n\n\n\n\n\nthis is amazing  promise")
console.log(a.toString(),b)