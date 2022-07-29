console.log("Hi")

//Complete the square sum function so that it squares each number passed into it and then sums 
//the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers){
    let numlength = numbers.length;
    let sum = 0;
    for(i = 0; i<numlength; i++)
    {
     sum = sum + (Number(numbers[i])**2)
    }
    return sum
}


const inNumbers = [1,2,2]
console.log(squareSum(inNumbers));


