// Path module in Node.js
import path from "path"
let myPath = "C:\\Users\\harsh\\Downloads\\html development with git\\html-development-with-git\\87 Working with Files fs and path Modules\\harshad.txt"
console.log(path.extname(myPath)) // .txt



console.log(path.dirname(myPath))
console.log(path.basename(myPath)) // harshad.txt

// Join paths
console.log(path.join("c:/","programs\\harshad.txt")) // c:/programs/harshad.txt