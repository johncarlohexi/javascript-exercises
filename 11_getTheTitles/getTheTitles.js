let books = [{
    title:1,
    author: "carlo"
}, {
    title:2,
    author:"kurt"
} ]

const getTheTitles = function(array) {
    return array.map(book => book.title)
};

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
