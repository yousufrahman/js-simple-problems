function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}
const ages = [12, 54, 2, 75, 32, 40];
const oldest = largestElement(ages);
const oldest2 = largestElement([-10, -15, -34, -56]);

console.log('odest2', oldest2)
// console.log('odest', oldest);
