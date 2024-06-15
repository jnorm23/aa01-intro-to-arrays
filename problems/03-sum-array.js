/* Define a function called sumArray that takes in an array of numbers and
returns the total sum of all the numbers.
*/

// Your code here 
function sumArray(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    }
    return total;
}

// console.log(sumArray([1, 2]));        // => 3
// console.log(sumArray([5, 6, 4]));     // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30
// console.log(sumArray([]));            // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sumArray;