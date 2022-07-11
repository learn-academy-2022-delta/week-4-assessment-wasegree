// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("removeAndShuffle", () => {
//     const expected = ["pink", "yellow", "green", "blue"]
//     const expected2 = ["saffron", "aquamarine", "ochre", "periwinkle", "indigo"]
//     it("removes the first item from the array and shuffles the remaining content.", () => {
//       expect(removeAndShuffle(colors1)).toEqual(removeAndShuffle(expected))
//       expect(removeAndShuffle(colors2)).toEqual(removeAndShuffle(expected2))
//     })
//   })

// ReferenceError: removeAndShuffle is not defined
// Pass

// b) Create the function that makes the test pass.

// Pseudo Code:
// Declare a function called removeAndShuffle
// Parameter: arrayOfStrings
// Use .shift() to remove the first element -- arrayOfstrings.shift()
// Return arrayOfStrings.reverse() to shuffle the elements of the array

const removeAndShuffle = (arrayOfStrings) => {
    arrayOfStrings.shift()
   return arrayOfStrings.reverse()
}


// console.log(removeAndShuffle(colors1)) // ["pink", "yellow", "green", "blue"]
// console.log(removeAndShuffle(colors2)) // ["saffron", "aquamarine", "ochre", "periwinkle", "indigo"]





//------------Failed Attempts Start------------//
// At first I could not wrap my head around how to go about shifting the position of the elements in the array without using Math.random. I quickly realized that I would never be able to get a correct test if the elements were always in a random position. As a result I used .reverse since it was the best way for me to get a fixed output for testing.

// Pseudo Code:
// Declare a function called removeAndShuffle
// Parameter: arrayOfStrings
// Use .shift() to remove the first element -- arrayOfstrings.shift()
// Return arrayOfStrings.sort() and pass Math.random() as an argument

// const removeAndShuffle = (arrayOfStrings) => {
//     arrayOfStrings.shift()
//     return arrayOfStrings.sort(() => Math.random() - 0.5)
// }



// const removeAndShuffle = (arrayOfStrings) => {
//     let newArray = []
//     for(let i = 0; i < arrayOfStrings.length; i++) {
//      randomIndex = Math.floor(Math.random() * arrayOfStrings.length)
//         newArray.push(arrayOfStrings[randomIndex])
//     }
//         return newArray 
// }

// arrayOfStrings[i]; 
//                    arrayOfStrings[i] = arrayOfStrings[randomIndex];
//                    arrayOfStrings[randomIndex] = newArray


// const removeAndShuffle = (arrayOfStrings) => {
//     arrayOfStrings.shift()
//     let emptyArray = []
//     let randomIndex = Math.floor(Math.random() * arrayOfStrings.length)
//     // arrayOfStrings[randomIndex]
//     return emptyArray = arrayOfStrings[randomIndex]
// }

// const removeAndShuffle = (arrayOfStrings) => {
//     for(let i = 0; i < arrayOfStrings.length; i++) {
//     var randomIndex = Math.floor(Math.random() * (i + 1))
//     let newArray = arrayOfStrings[i]; 
//                    arrayOfStrings[i] = arrayOfStrings[randomIndex];
//                    arrayOfStrings[randomIndex] = newArray
//     }
//         return arrayOfStrings
// }

//------------End------------//





// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// describe("minAndMax", () => {
//   const expected = [-8, 90,]
//   const expected2 = [5, 109]
//   it("returns an array of the minimum and maximum numbers in that order.", () => {
//     expect(minAndMax(nums1)).toEqual(minAndMax(expected))
//     expect(minAndMax(nums2)).toEqual(minAndMax(expected2))
//   })
// })
// ReferenceError: minAndMax is not defined
// Pass

// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function call minAndMax
// Parameter: numArray
// Delcare a variable called newArray. Give newArray the value [Math.min(...numArray), Math.max(...numArray)]
// Return newArray


const minAndMax = (numArray) => {
    let newArray = [Math.min(...numArray), Math.max(...numArray)]
    return newArray
}

// console.log(minAndMax(nums1)) // [ -8, 90 ]
// console.log(minAndMax(nums2)) // [ 5, 109 ]



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// describe("noDuplicates", () => {
//     const expected = [3, 7, 10, 5, 4, 8, 2, 1]
//   it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
//     expect(noDuplicates(testArray1,testArray2)).toEqual(noDuplicates(expected))
//   })
// })
// ReferenceError: noDuplicates is not defined
// PASS


// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function called noDuplicates
// Pass parameters: array1, array2
// Delcare a varibale called comboArray. 
// Use .concat to combine arrays. Give comboArray the value -- array1.concat(array2)
// The Set method holds any value and creates a collection of instances of the values.  The values being passed in can only be used once. Therefore preventing duplicate values.
// Declare a varibale called newArray and give it the value [...new Set(comboArray)]
// Return newArray

const noDuplicates = (array1,array2) => {
    let comboArray = array1.concat(array2)
    let newArray =[...new Set(comboArray)]
    return newArray

}
// console.log(noDuplicates(testArray1, testArray2)) // [3, 7, 10, 5, 4, 8, 2, 1]






