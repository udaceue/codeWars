console.log("Hi")
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the 
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  
    let resultArr = []
    if(input === null || input.length===0){
      return resultArr  
    }
  else{
    const lengthArr = input.length;
    let positives = 0
    let negatives = 0 
    for (i = 0; i<lengthArr; i++)
    {if(input[i]>0)
    {
      positives = positives + 1
    }
     else if(input[i]<0)
       {
      negatives = negatives + input[i]
       }

     }
  resultArr.push(positives, negatives)
  console.log(resultArr)
  return resultArr
    }
}