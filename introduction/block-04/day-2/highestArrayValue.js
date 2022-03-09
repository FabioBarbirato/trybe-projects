let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highValue = 0;
let num = 0;

for (let i = 0; i < numbers.length; i++) {
    if (highValue < numbers[i]) {
        highValue = numbers[i];
    }
} console.log(highValue);