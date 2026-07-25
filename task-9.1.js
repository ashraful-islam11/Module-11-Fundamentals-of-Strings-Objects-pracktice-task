/**
 * todo:            topic: 
 * 
 * Task 9.1 — Contact Book
 ** Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"};
 * * 
 * * lop through the contact object and print each key-value pair.
 * * convert the email to lowercase and update the object.
 * * add a new property favoriteWords: [] (an array) — push 3 words to it.
 * * reverse the name string just for fun using one of your three reverse functions from Task 4.1.
 * * check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

 */

  let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};


// 1.  loop through the object, and print key value par.

for( let contactKeys in contact){
    let contactValue = contact[contactKeys];
    console.log(contactKeys ,':', contactValue);
}


//2. 

let lowercase = contact.email.toLowerCase();
console.log(lowercase);

// update: 
contact.email=lowercase;
console.log(contact);



// 3. add a new property: and than push 3 words: 

  contact.favoriteWords=[];
  console.log(contact);

  contact.favoriteWords.push('eat food');
  contact.favoriteWords.push('sing a song');
  contact.favoriteWords.push('play football');
  console.log(contact);

  

// 4. revers the name string: 
  const willSplit = contact.name.split('');
  const willReverse = willSplit.reverse();
  const willJoin = willReverse.join('');
  
//   update object : 
  console.log(contact.name= willJoin);



  // 5.  if check the  @email.com:
  let check = contact.email.includes('@email.com');
  if(check ){
    console.log("Confirmation: The email includes @email.com");
  }
  

  // our contact object:
  console.log(contact);



