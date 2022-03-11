let array = ['java', 'javascript', 'python', 'html', 'css'];
// let separateCharacter = array.split(', ');
let maior = '';
let tam = 0;

for(let i = 0; i < array.length; i++){
    tam = array[i].length;

    if(maior.length < tam){
        maior = array[i];
    }
}

console.log(maior);
