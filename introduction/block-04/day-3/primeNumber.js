function prime(number) {
  var divisor = 0;
  for (let count = 1; count <= number; count++) {
    if (number % count === 0) divisor++;
  }
  if (divisor === 2) return true;
  else return false;
}
for (let i = 1; i <= 50; i++) {
  if (prime(i) == true) {
    console.log(i);
  }
}
