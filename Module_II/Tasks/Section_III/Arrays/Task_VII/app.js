let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460,
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254,
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352   
    }];
    
    // adding new book
let newBook = {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        pages: 254
    };
    
books.push(newBook);

let copiedBooks = books.slice(-2);

books.shift();

// pages sum
let sum = 0;

for (let i = 0; i < books.length; i++) {
    sum += Number(books[i].pages);
}

// printing total pages
console.log("Total pages: " + sum);
    
for (let i = 0; i < books.length; i++) {   
    console.log("Title: " + books[i].title + " Author: " + books[i].author + " Pages: " + books[i].pages);
}
