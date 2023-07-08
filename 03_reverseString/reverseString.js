let word1 = "hello"

const reverseString = function(word) {
    let wordsplited = word1.split("")
    let reverseArray = wordsplited.reverse();
    let joinArray = reverseArray.join("")
    return joinArray
};


// Do not edit below this line
module.exports = reverseString;
