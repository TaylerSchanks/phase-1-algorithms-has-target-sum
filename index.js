function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
  This is Quadratic time because we need to check each number in the array to each other to see if they add to the target number
*/

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  look at each number in the array
  look at the rest of the numbers
  check if the two numbers add up to the target number
  if yes return true
  else return false
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
}

module.exports = hasTargetSum;
