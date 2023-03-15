// https://coursework.vschool.io/array-filter-exercises/

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
// your code here
//   }
// test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//  results >>>>
//  two ways of doing it:

// 1st:
//   function fiveAndGreaterOnly(array) {
//     return array.filter(array => array > 5);
//    }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2nd:
//   function fiveAndGreaterOnly(array) {
//     return array > 5;
//    }

// console.log([3, 6, 8, 2].filter(fiveAndGreaterOnly));

// 2) Given an array of numbers, return a new array that only includes the even numbers

// function evensOnly(arr) {
// your code here
//   }
// test
//   console.log(evensOnly([3, 6, 8, 2]));
/// [6, 8, 2]

//  results >>>>

//   function evensOnly(arr) {
//     if (arr % 2 === 0) {
//       return true;
//     }
// }

// console.log([3, 6, 8, 2].filter(evensOnly));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// function fiveCharactersOrFewerOnly(arr) {
//   let fiveCharacterOrFewer = [];
//   return arr.filter(arr => arr.length <= 5);
// }

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// function peopleWhoBelongToTheIlluminati(arr) {
//   const dontBelongToTheClub = arr.filter((obj) => obj.member === false);
//   return dontBelongToTheClub;
// }

// console.log(
//   peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true },
//   ])
// );

// //[
// //     { name: 'Eric Jones', member: false },
// //     { name: 'Kayne West', member: false }
// //   ]

// x) Extra:
// How to use map to get an propery of all itens from a object inside an array

// const enterprises = [
//     { name:'Samsung',marketValue: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
//     { name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
//     { name: 'Intel',marketValue: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
//     { name: 'Facebook',marketValue: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
//     { name: 'Spotify',marketValue: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
//     {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
// ];

// const names = enterprises.map(x => x.name)
// console.log(names)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

// function ofAge(arr){
//     // your code here
//   }
//   // test
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ]));
//   // =>
//   //[ { name: 'Angelina Jolie', age: 80 },
//   //  { name: 'Bob Ziroll', age: 100 } ]
