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
    
console.log(books.pages);
