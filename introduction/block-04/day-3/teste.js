// let array = ["java", "javascript", "python", "html", "css"];
// // let tam = 0;
// let cont = [];

// for (let i = 0; i < array.length; i++) {
//   cont.push(array[i].length);
// }

// let number = 15;

// for (let i = 1; i <= number; i--) {
//   if (number % i === 0){
//       console.log("É número primo.")
//   }else{
//       console.log("Não é número primo.");
//   }
// }

// if (dividers == 2) {
//   console.log("É primo");
// } else {
//   console.log("Não é primo");
// }

// function primeNumber(num) {
//   for (let divisor = 2; divisor < num; divisor++) {
//     if (num % divisor == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// let determinadoNumero = 50;
// for (let i = 2; i < determinadoNumero; i++)
//   if (primeNumber(i)) {
//     console.log(i);
//   }

function primo(num) {
  for (let divisor = 2; divisor <= num; i++) {
    if (num % divisor == 0) {
      return false;
    } else {
      return true;
    }
  }
}
let determinadoNumero = 50;
for (let i = 2; i < determinadoNumero; i++)
  if (primo(i)) {
    console.log(i);
  }
