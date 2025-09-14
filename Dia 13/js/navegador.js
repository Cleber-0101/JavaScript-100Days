

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


//selecionando elementos com Java script seletores CSS
const produtosQuery = document.querySelectorAll(".produtos")
console.log(produtosQuery)

//selecionando apenas um elemento
const unicoElemento = document.querySelector("main")
console.log(unicoElemento)


//metodos para alterar HTML
// 1 insertBefore
// 2 appendChild
// 3 replaceChild
const p = document.createComment("p")
const header = title.parentElement;
header.insertBefore(p , title)


//padrão é selecionar , criar , modificar 
const li = document.querySelector("nav ul")
const criandoLi = document.createElement("li")
li.appendChild(criandoLi)


// usando replace child, trocando 
const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo"
header.replaceChild(h2 , title)


//Trabalhando com atributos
const pegandoOprimeiroelementos = document.querySelector("a")
console.log(pegandoOprimeiroelementos)
pegandoOprimeiroelementos.setAttribute("href" , "https://www.google.com.br")

console.log(pegandoOprimeiroelementos.getAttribute("href"))




//altura e largura dos elementos 
const footer = document.querySelector("footer") 
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientHeight)
console.log(footer.clientWidth)


//fazendo um loop e alterado a cor de todos os elementos selecionados
for(const li of listItens){
    li.style.background = "red"
}

