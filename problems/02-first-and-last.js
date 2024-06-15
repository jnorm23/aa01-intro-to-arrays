/*
Define a function firstAndLast that takes in an array of numbers and returns the
sum of the first and last element if there is an even number of elements in the
array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.
*/

// Your code here 

function firstAndLast(arr){
if (arr.length === 0)
    return 0
    const first = arr[0]
    const last = arr[arr.length - 1]
if (arr.length % 2 === 0) {
    return first + last
} else {
    return first - last
}
}
    

// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;