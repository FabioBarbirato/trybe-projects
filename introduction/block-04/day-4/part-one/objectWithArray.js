let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "O Pior Dia de Todos",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
        {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editora: 'Rocco',
        },
        {
            titulo: 'The Lord of The Rings',
            autor: 'J.R.R. Tolkien',
            editora: 'Allen & Unwin',
        },
    ],
};

// console.log(
//     `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`
// );

let favoriteBooks = 0;
for(let i = 0; i < leitor.livrosFavoritos.length; i++){
    favoriteBooks++;
}

console.log(`${leitor.nome} tem ${favoriteBooks} livros favoritos.`);

console.log(leitor);