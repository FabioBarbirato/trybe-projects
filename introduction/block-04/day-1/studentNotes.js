const note = prompt("Digite a nota do aluno:");

if (note > 100 || note < 0) {
    alert("Erro! A nota indicada é inválida!");
} else {
    if (note >= 90) {
        alert("A");
    } else if (note >= 80) {
        alert("B");
    } else if (note >= 70) {
        alert("C");
    } else if (note >= 60) {
        alert("D");
    } else if (note >= 50) {
        alert("E");
    } else {
        alert("F");
    }
}