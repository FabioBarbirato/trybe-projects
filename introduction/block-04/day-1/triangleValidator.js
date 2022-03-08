const ang1 = 20;
const ang2 = 50;
const ang3 = 110;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    if ((ang1 + ang2 + ang3) == 180) {
        console.log("true");
        console.log("Os valores informados são ângulos internos válidos que formam um triângulo.");
    } else {
        console.log("False");
        console.log("A soma dos ângulos precisa ser 180, para formar ângulos válidos para um triângulo.")
    }
} else {
    console.log("O valor do ângulo de um triângulo deve ser um número positivo. Tente novamente.")
}