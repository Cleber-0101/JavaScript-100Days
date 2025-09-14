

//todos os documentos podem ser acessado pelo DOM atraves do document.body
console.log(document.body.childNodes)

//getElementsByTagName
//getElementById
//querySelector

const listItens = document.getElementsByTagName("li")
console.log(listItens)

//Selecionar por ID
const title = document.getElementById("titulo")
console.log(title)

//selecionando por class
const produtos = document.getElementsByClassName("produtos")
console.log(produtos)