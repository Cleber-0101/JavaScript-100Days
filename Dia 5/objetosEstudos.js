//Primeiro objeto
let bic = {
    cor: "azul",
    marca: "BIC",
    tipo: "esferográfica"
}

//como adicionar um novo objeto
let caneta = {
    cor: "preta",
    marca: "Faber-Castell",
    tipo: "gel"
}

//Adicionando(trocando dados do OBJETO)
bic.marca = "cleber"
console.log(bic);

//mostrando somente um dado 
console.log(bic.tipo);

//deletando dados do objeto
delete bic.cor
console.log(bic);


//adicionando um item dentro do objeto 
bic.cor = "verde"
console.log(bic);
