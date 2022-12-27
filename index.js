function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target) {
        return true
      }
    }
  } return false
}

/* 
  Write the Big O time complexity of your function here
  O(n**2)
*/

/* 
  Add your pseudocode here
  Create two loops
  Add numbers from each loop
  Compare to target number
  Return true if target exists
  Return false if target does not exist
*/

/*
  Add written explanation of your solution here
  This code uses nested loops to iterate over an array. Adding the two iterations
  allows the code to compare the sum to the target and return true or false if the 
  target exists within the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 10, 15], 35));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 15, 7, 4, 3, 0], 4));
}

module.exports = hasTargetSum;
