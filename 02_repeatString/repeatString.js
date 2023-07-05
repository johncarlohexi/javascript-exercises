let string1 = "hello"
const repeatString = function(rString, times) {
    let output = ""
    for (let i = 0; i < times; i++) {
        output += rString
    } return output
};
repeatString(string1, 2)
console.log(repeatString(string1, 2))

// Do not edit below this line
module.exports = repeatString;
