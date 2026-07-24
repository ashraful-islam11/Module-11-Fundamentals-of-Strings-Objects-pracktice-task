/**
 * todo:            topic: 
 * Task 6.1 — Dot vs Bracket Notation
  1.  let car = { brand: "Toyota", model: "Corolla", year: 2022 };
  2.   Get brand using dot notation.
  3.   Get model using bracket notation.
  4.  Add a new property color: "blue" using bracket notation.
  5.  Update year to 2023 using dot notation.

 */


//    1. declared car object : 
   let car = {
    brand: 'Toyota',
    model: 'corolla',
    year: 2022,
   }

//2. get brand using dot notation :

 const   getBrand = car.brand;
 console.log(getBrand);


 // 3. get model using bracket notation :
 const getModel = car.model;
 console.log(getModel);


// 4.  Add a new property color: "blue" using bracket notation:
  const addColorBracketNotation = car['color']= 'blue';

  console.log(car);


// 5.  Update year to 2023 using dot notation.
  const updateYear = car.year= 2023;
  console.log(car);
