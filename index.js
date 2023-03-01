function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let difference = array[i] - target;
    for (let j = 0; j < array.length; j++) {
      if (j !== i && difference === array[j] * -1) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
  iterate through the array
  subtract the target from the iteration
  take the difference of iteration minus target and check if it equals the opposite of the *remaining* values.
  as soon as one value matches the target, return true;
*/

/*
  Add written explanation of your solution here
  We need to determine if any two numbers in an array, when added together, equal the target number.
  The long way would be to iterate through the array, starting at the beginning a adding array[0] to array[1] all the way to array[n], then going to array[1] and adding it to array[1 + 1] up to array[n], only stopping when we get to array[n - 1] + array[n].
  Then we'd see if any of those values equaled target.
  I think this is quadratic, since every value would have to be added to every other value, no matter how many there are, before checking to see if they match.

  I think a, maybe, faster way would be to subtract target from each value of the array, one at a time, then add that number to the remaining values.
  If an array's value minus the target plus another value equals zero, then return true.
  WAIT, even faster, if subtracting the target from a number equals the negative of any other number, then it'll return true.
  I think this is still quadratic, but doesn't need to get as many values as before.  I'm not entirely sure.
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 82, 13, 24, 7], 31));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 4, 4, 5], 8));
}

module.exports = hasTargetSum;
