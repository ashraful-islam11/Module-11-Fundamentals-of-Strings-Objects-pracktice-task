/**
 * todo:                topic: 
 * 
 * Task 7.1 — Keys and Values
 *  let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
 *   Get an array of all keys 
 *   Get an array of all 
 *   Delete the pages property using delete.

 */

// 1. declare a book object: 

let book = {
    title: 'The Hobbit',
    author: 'Tolkien',
    pages : 310
}

//2.Get an array of all keys :
const allKeys = Object.keys(book);
console.log(allKeys);


// 3,   Get an array of all  value:

const allValues = Object.values(book);
console.log(allValues);


// 4. Delete the pages property using delete.

delete book.pages;
console.log(book);