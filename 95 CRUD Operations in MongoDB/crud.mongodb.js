//crud oprtons in mongodb
use("CrudDB")
console.log(db)

// Create a collection named "courses" if it doesn't exist
db.createCollection("courses")

// Insert a single document into the "courses" collection
// db.courses.insertOne({
//     name: "harsh web dev free course",
//     price: 0,
//     assignments: 12,
//     project: "45"
// })

// Insert multiple documents into the "courses" collection
// db.courses.insertMany(
//     [
//         {
//             "name": "harsh web dev free course",
//             "price": 0,
//             "assignments": 12,
//             "project": "45"
//         },
//         {
//             "name": "java masterclass",
//             "price": 20000,
//             "assignments": 15,
//             "project": "3"
//         },
//         {
//             "name": "python for beginners",
//             "price": 15000,
//             "assignments": 10,
//             "project": "2"
//         },
//         {
//             "name": "full-stack development",
//             "price": 30000,
//             "assignments": 20,
//             "project": "5"
//         },
//         {
//             "name": "data science essentials",
//             "price": 35000,
//             "assignments": 18,
//             "project": "6"
//         },
//         {
//             "name": "machine learning bootcamp",
//             "price": 40000,
//             "assignments": 22,
//             "project": "7"
//         },
//         {
//             "name": "android app development",
//             "price": 25000,
//             "assignments": 14,
//             "project": "4"
//         },
//         {
//             "name": "cloud computing basics",
//             "price": 22000,
//             "assignments": 13,
//             "project": "2"
//         },
//         {
//             "name": "ethical hacking crash course",
//             "price": 18000,
//             "assignments": 11,
//             "project": "3"
//         },
//         {
//             "name": "UI/UX design fundamentals",
//             "price": 16000,
//             "assignments": 9,
//             "project": "1"
//         }
//     ]

// )

// Find all documents in the "courses" collection
// let a = db.courses.find({
//     price:0
// })
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// Find a single document in the "courses" collection
// let b = db.courses.findOne({
//     price: 0
// })
// console.log(b)
// console.log(b.toArray())

//update
// db.courses.updateOne({ price: 0 }, {$set:{ price: 100 }})

// Update multiple documents in the "courses" collection
// db.courses.updateMany({ price: 0 }, {$set:{ price: 1000 }})

//delete
// db.courses.deleteOne({ price: 100 })

// Delete multiple 
// db.courses.deleteMany({ price: 1000 })

//oprators
//https://www.mongodb.com/docs/manual/reference/operator/?msockid=3428274ee5136cfe1b7232cee4886d10
