console.log("Hi")
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    //#Happy Coding! ^_^
      const miliseconds = 1000;
      const seconds = s * miliseconds; 
      const minutes = (m * 1000)*60; 
      const hours = (h* 1000)*3600;
      const result = seconds + minutes + hours;
    return result;
  }

