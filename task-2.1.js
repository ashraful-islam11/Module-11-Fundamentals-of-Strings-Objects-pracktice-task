/**
 * todo:            topic: 
 * 
 * * Task 2.1 — Case Conversion
 *  let name = "JavaScript";
   *  Print the uppercase version.
   *  Print the lowercase version.
 * Print the string with whitespace trimmed: "   hi there   " → "hi there"

 */

let name = 'javaScript';
console.log(name);

// 1.  print the upper case version:
  const stringUpper = name.toUpperCase();
  console.log(stringUpper);
   



  // 2. print the lower case version:
  const lowercase = name.toLowerCase();
  console.log(lowercase);


  // 3. Print the string with whitespace trimmed:
  let whitespace = "   hi there   " ;
  const trimmed = whitespace.trim();
  console.log(trimmed);