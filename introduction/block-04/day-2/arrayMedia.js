let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    media = (sum / numbers.length);
} console.log(media);

if (media > 20) {
    console.log("Média maior que 20");
} else {
    console.log("Média menor ou igual a 20");
}
