

// Select the database to use.
use('harshadDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "java",
    "price": "20000",
    "instructor": "harsh"
  },
  {
    "name": "python",
    "price": "15000",
    "instructor": "neha"
  },
  {
    "name": "web development",
    "price": "25000",
    "instructor": "rahul"
  },
  {
    "name": "data science",
    "price": "30000",
    "instructor": "priya"
  }
]);



// Print a message to the output window.
console.log(`done Inserting data`);

