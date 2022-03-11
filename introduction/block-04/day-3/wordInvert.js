let word = 'trybe';
let done = '';
// separa por caracteres cada elemento do array
let change = word.split("");

//Une elementos de um array
// let done = change.join("");

for(let i = change.length-1; i >= 0; i--){
    done += change[i];
}
console.log(change);
console.log(done);