/**
 * todo:            topic: 

**   Task 1.1 — Spot the Difference

* let str = "hello";
* let arr = ["h", "e", "l", "l", "o"];

* 1. Log str.length and arr.length. What do you notice?
* 2. Try str[0] and arr[0]. Do both work the same way?
* 3. Try str.push("!") — what happens? Why does this fail for strings but not arrays?

 */

let str = 'hello';
let arr = ["h", "e", "l", "l", "o" ];

//* 1. is start :

const strLength = str.length;
console.log('str length: ', strLength);

const arrLength = arr.length;
console.log('arr length', arrLength);


// *2. is start :  get and set : 

// get str and arr 0 index value: 
const getStr = str[0];
console.log(' get str 0 index value is :', getStr);

const getArr = arr[0];
console.log(' get Arr 0 index value is : ', getArr);



//set str and arr 0 index of value:
const setStr = str[0] ='H';
console.log('set str 0 index value is: ', setStr);

const setArr = arr[0] = 'H';
console.log('set arr 0 index value is : ',setArr);




//* 3.  Try str.push("!")
//  const pushStr = str.push('!');              // primitive data type : bole  push kora jaycche na. and push shudhu array er method.
//  console.log(str);

const pushArr= arr.push('!');       
console.log(arr);

