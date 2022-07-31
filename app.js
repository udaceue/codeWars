console.log("Hi")

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){

  let arr = []
x.forEach(element=>{
  arr.push(parseInt(element)*2)
})
return arr
}