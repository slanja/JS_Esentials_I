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

// removing lost book from list
books.shift();
    
for (let i = 0; i < books.length; i++) {   
    console.log("Title: " + books[i].title + " Author: " + books[i].author + " Pages: " + books[i].pages);
}
