const piece = prompt("digite a peça de xadrez");

switch (piece.toLowerCase()) {
    case "bispo":
        alert("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "cavalo":
        alert("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "peao":
        alert("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;
    case "rainha":
        alert("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "rei":
        alert("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    case "torre":
        alert("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    default:
        alert("Peça informada inválida.");
}