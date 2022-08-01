console.log("Hi");

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398///

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.


// // Sum Numbers
// function sum (numbers) {
  
//   let result = 0 
//       if (numbers === undefined){
//         return 0 
//       } else
//         {
//           numbers.map((el)=>{
//             result = result + el
//           })
//           return result
//         }
// };

const Numbers = [1,2,3,4]

function sum(){
        return Numbers.reduce((a,b) => a+b ,0)
}

console.log(sum(Numbers))