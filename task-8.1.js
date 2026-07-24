/**
 * todo:            topic:
 * 
 * Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 85, art: 95 };
Use a for...in loop to log each key and value like: math: 90.
Calculate the average of all values in the loop.

 */

// 1. declare object:

let scores = {
    math: 90, 
    science: 85, 
    art: 95
}

// 2.  for in loop: 


for( let scoresKey in scores){
    // console.log(scoresKey);

    const value = scores[scoresKey];
    console.log( scoresKey , ':', value);

}

// 3. calculate average: 

 let sum = 0;
 let count = 0;
for ( let keys in scores){
     sum += scores[keys];
     count++;
      
}

   let average  = sum / count ;
  console.log(average);

