/**
 * todo:            topic:  
 * 
 ** Create an object student with these properties: name, age, grade, and isEnrolled.
  *  Log the whole object.
  *  Log just the name property using dot notation.

 */

 // 1. create a object :

  const student = {
    name: 'ashraful islam',
    age: 20,
    grade: 60,
    isEnrolled: true
  }

  // 1. log the whole object: 
  console.log(student);

  // 3. log using dot notation: 
  const studentsKeys = Object.keys(student);
  console.log(studentsKeys);
