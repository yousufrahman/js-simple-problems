// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }

//     }
//     return largest;

// }
// const ages = [12, 54, 2, 75, 32, 40];
// const oldest = largestElement(ages);
// const oldest2 = largestElement([-10, -15, -34, -56]);

// console.log('odest2', oldest2)
// // console.log('odest', oldest);


// // Task: find the lowest element of an array 
// function min(input) {
//     if (toString.call(input) !== "[object Array]");
//     return false;
//     return Math.min.apply(null, input);
// }
// console.log(min([12, 32, 53, 14]));
// console.log(min([-12, -43 - 53 - 5 - 4]));
function min(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.min.apply(null, input);
}

console.log(min([12, 34, 56, 1]));
console.log(min([-12, -34, 0, -56, -1]));

