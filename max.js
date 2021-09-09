// const business = 550;
// const minister = 350;
// const army = 600;
// // if (business > minister) {
// //     console.log('Business persone er pola is bigger');
// // }
// // else {
// //     console.log('minister er pola is bigger')
// // }
// if (business > minister && business > army) {
//     console.log('Business is bigger')
// }
// else if (minister > business && minister > army) {
//     console.log('Minister is bigger')
// }
// else {
//     console.log('army is bigger')
// }

// const business = 400;
// const minister = 600;
// const army = 700;
// if (business > minister && business > army) {
//     console.log('business man is biger');
// }
// else if (minister > business && minister > army) {
//     console.log('minister is bigger');
// }
// else {
//     console.log('army is bigger');
// }

// const business = 650;
// const minister = 850;
// const army = 900;
// const max = Math.max(business, minister, army);
// console.log('largest is', max);

/*function */

// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else {
//         return second;
//     }
// }
// const largest = findLargest(354, 241);
// console.log('largest is', largest)







function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (first && second > third) {

        return second;
    }

    else {
        return third;

    }

}

const result = findLargest(500, 1100, 900);
console.log(result);
