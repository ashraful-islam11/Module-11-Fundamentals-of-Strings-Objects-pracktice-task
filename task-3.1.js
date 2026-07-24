/**
 *          todo:               topic:
 *  
 * * Task 3.1 — Slicing Strings
 *?      let sentence = "Learning JavaScript is fun!";
        * Get just the word "Learning" using .slice().
        * Get the last 4 characters ("fun!") using .slice() with a negative index.

 */

 let sentence = "Learning JavaScript is fun!";

 // 1. just learning print: 

 const learning = sentence.slice(0, 8);
 console.log(learning);

 // 2. print Fun! use negative index:
 const fun = sentence.slice(-4);
 console.log(fun);