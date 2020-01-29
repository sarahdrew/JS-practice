// 1. Write a small program, that given a string as input, counts the number of occurences letter being looked for.



function countOccurence(string, letter) {
    //occrence starts at 0 then loop through
    occurence = 0;
    for (let i = 0; i < string.length; i++) {
        //if the character where it's looped is the letter that's being looked for, add to the occurence
        if (string.charAt(i) == letter) {
            occrence += 1;
        }
    }
    return occurence;
}


//example for Elliot, sumFunction:
const sumFunction = function (a, b) {
    let sum = a + b;

    //we will want to return sum
    return sum;
}




//2. Write a react-native component that animates its content in and out.
//you need tto implement the <ContnetSwapper value ={} /> component.
// Requirements:
// Every time the parent component changes the “value” field on the ContentSwapper component, the new content will we replaced with the old content using the swap animation described above.


//Write a function that takes an integer minutes and converts it to seconds.
//example:
//converts(5) --> 300
//converts(3) --> 180

function converts(number) {

    let seconds = 0;
    let seconds = number * 60;
    return seconds;
}
<<<<<<< HEAD

//From leetcode:
//Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit 
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your 
//function returns 0 when the reversed integer overflows.
=======
>>>>>>> 4fc4fb76391b622d45803b157b639dd8806ffcba
