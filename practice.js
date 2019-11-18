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
