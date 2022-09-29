const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015},
];

const comments = [
    {text: 'Love this', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice', id: 542328},
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
const currentYear = new Date().getFullYear(); // Saving the current year

people.forEach((element) => {
    console.log(element.name, element.year, `Age: ${currentYear - element.year}`);
});
console.log();


if(people.some((element) => currentYear - element.year === 19 )) {
    console.log('At least one pearson is 19.');
} else {
    console.log('Any person in this array is at least 19.')
}
console.log();

// Array.prototype.every() // is everyone 19?
if(people.every((element) => currentYear - element.year === 19)) {
    console.log('Every person is 19.');
} else {
    console.log('Any person in this array is at least 19.')
}
console.log();

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for 
// find the comment with the ID of 823423
const foundComment = comments.find((element) => element.id === 823423);
console.log(foundComment.text, foundComment.id);
console.log();
