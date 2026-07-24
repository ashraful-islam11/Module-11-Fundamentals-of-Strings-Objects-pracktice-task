/**
 * todo:           topic:
 * * Task 1.2 — Convert Between Them
 * Convert the string "JavaScript" into an array of characters.
 * Convert the array ["c", "a", "t"] back into a single string "cat".

 */

// 1. convert string to characters array:

const stringData = 'JavaScript';
const convert = stringData.split('');
console.log(convert);

// 2. conver the array to string: 
const pet = ['c', 'a', 't'];
const convertToStr = pet.join('');
console.log(convertToStr);
