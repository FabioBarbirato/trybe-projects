const num1 = 15;
const num2 = 8;
const num3 = 25;

if(num1 > num2 && num1 > num3){
    console.log(`${num1} é o maior entre os três valores.`);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} é o maior entre os três valores.`);
}else{
    console.log(`${num3} é o maior entre os três valores.`);
}