// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 1. Declare a variable sum to store the sum, initialized with 0
// 2. We'll have to loop through all the numbers from 0 to 1000
// 3. We will have to check which are multiples of 3 OR 5 by doing an IF statement checking for the remainder of the division with the modulus operator
// 4. Everytime that the remainder for 3 or 5 is 0 (zero) we will add the counter or the iterator to the sum

let multiplesOf3and5 = (nLimit) => {
  let sum = 0;

  for (let index = 0; index < nLimit; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
};

const result = multiplesOf3and5(49);
console.log(result);
