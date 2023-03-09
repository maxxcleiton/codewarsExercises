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