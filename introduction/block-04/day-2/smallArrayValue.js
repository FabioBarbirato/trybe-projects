let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = 100;
let min = numbers[0];
let aux = 0;

for (let i = 0; i < numbers.length; i++) {       
        if (max > numbers[i]) {
            min = numbers[i];
        }    
} console.log(min);
