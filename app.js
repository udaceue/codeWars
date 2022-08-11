console.log("Hi");

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


const ages = [32, 33, 0, 40];
const results = ages.filter(checkAdult)
function checkAdult(age) {
      if(age&&age>0){
      return age
    }
      else 
    {
      return 0
    }
}

console.log(results)
