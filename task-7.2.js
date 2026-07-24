/**
 * todo:                topic: 
 * 
 * 1.  Log the city using dot notation chaining.
 * 2.  Add a country property inside the address.
 * 3.  Delete the zip property from the nested object.
 *  
 */

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}


// 1.  Log the city using dot notation chaining.

const city = user.address.city;
console.log(city);


// 2. Add a country property inside the address.
const addCountry = user.address.country ='Bangladesh';
console.log(addCountry);
console.log(user);

// 3. Delete the zip property from the nested object.

delete user.address.zip;
console.log(user);



