/**
 * todo:                topic: 
 * 
 * ?Task 3.2 — Combine Strings
 *   Use .concat() to join "Hello" and "World" into "Hello World".
 *   Use + and template literals to do the same thing. Compare all three approaches.

 */
const first = 'hello';
const second = 'world';

// 1.  use concat().
const serial = first.concat(' ',second);
console.log(serial);

// 2. use + : 
const stringSum = first  + ' ' + second;
console.log(stringSum);

// 3. use back teak : ``

const backTick = `${first}  ${second}`;
console.log(backTick);